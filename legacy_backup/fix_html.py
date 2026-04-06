import re
import sys

def parse_corrupted_html(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    out_lines = []
    
    # HTML block elements that typically act as containers in this specific file
    tags = {'div', 'section', 'nav', 'footer', 'button', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'script', 'style', 'head', 'body', 'html', 'strong', 'small', 'em'}
    
    for i, line in enumerate(lines):
        # If line already has valid HTML tags like <div or </div, leave it mostly alone or just return it as is
        if '<' in line and '>' in line:
            out_lines.append(line)
            continue
            
        stripped = line.strip()
        if not stripped:
            out_lines.append(line)
            continue
            
        # Handle custom strings
        if stripped == '!doctype html':
            out_lines.append('<!DOCTYPE html>\n')
            continue
            
        indent = len(line) - len(line.lstrip())
        indent_str = ' ' * indent
        
        parts = stripped.split()
        first_word = parts[0]
        
        if first_word in tags:
            # Check if it's just a closing tag (e.g., just "div" or "section")
            if len(parts) == 1:
                out_lines.append(f"{indent_str}</{first_word}>\n")
                continue
                
            # It's an opening tag with attributes or text
            attrs = []
            text_start_idx = 1
            for j in range(1, len(parts)):
                if '=' in parts[j]:
                    attr_parts = parts[j].split('=', 1)
                    attrs.append(f'{attr_parts[0]}="{attr_parts[1]}"')
                    text_start_idx = j + 1
                elif parts[j] in ['rv', 'rvd', 'open', 'taken', 'free', 'yes', 'no']:
                    # some specific standalone classes in this file (like rv, open) that were not connected to class=
                    # Actually, if class is already specified, this is dangerous. Let's just treat anything without '=' as start of text.
                    text_start_idx = j
                    break
                else:
                    text_start_idx = j
                    break
            
            attr_str = ' '.join(attrs)
            if attr_str:
                attr_str = ' ' + attr_str
                
            inner_text = ' '.join(parts[text_start_idx:])
            
            # Check if inner text ends with the same tag (inline closing tag)
            if inner_text.endswith(first_word) and len(inner_text) > len(first_word) and not inner_text.endswith(' ' + first_word):
                # E.g., "spanWhat do I need to providespan" -> tag span
                rem = inner_text[:-len(first_word)]
                if rem and not rem.endswith(' '):
                    out_lines.append(f"{indent_str}<{first_word}{attr_str}>{rem}</{first_word}>\n")
                    continue
            if inner_text.endswith(' ' + first_word) or inner_text == first_word:
                 # "span What do I need span"
                rem = inner_text[:-len(first_word)].strip()
                out_lines.append(f"{indent_str}<{first_word}{attr_str}>{rem}</{first_word}>\n")
                continue
                
            if inner_text:
                # E.g., h3Strategyh3... wait, if it's h3Strategyh3, first_word=h3, inner=Strategyh3.
                # Handled above via endswith(first_word)
                if inner_text.endswith(first_word):
                    pass # already caught
                
                # If there's inner text but it doesn't end with a closing tag, we just open it and put the text
                out_lines.append(f"{indent_str}<{first_word}{attr_str}>{inner_text}\n")
            else:
                out_lines.append(f"{indent_str}<{first_word}{attr_str}>\n")
        else:
            # If it doesn't start with a known tag, it's probably inner text bridging lines
            # Check if it ends with a closing tag of the parent? 
            # Or it's CSS inside <style>
            # For CSS, we need to add back colons: 'box-sizing border-box;' -> 'box-sizing: border-box;'
            if '{' in stripped or ';' in stripped or ':' in stripped or '}' in stripped or stripped.startswith('.') or stripped.startswith('@'):
                 # It's likely CSS. Let's do a naive fix for missing colons in properties
                 if ';' in stripped and ':' not in stripped:
                     # e.g. "box-sizing border-box;"
                     prop_parts = stripped.split(' ', 1)
                     if len(prop_parts) == 2:
                         css_line = f"{indent_str}{prop_parts[0]}: {prop_parts[1]}\n"
                         out_lines.append(css_line)
                         continue
            out_lines.append(line)

    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

if __name__ == '__main__':
    parse_corrupted_html(sys.argv[1], sys.argv[2])
