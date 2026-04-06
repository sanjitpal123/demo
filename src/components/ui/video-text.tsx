"use client";

import { cn } from "@/lib/utils";

interface VideoTextProps {
  src: string;
  children: string;
  className?: string;
  textClassName?: string;
}

/**
 * High-end VideoText component that clips a video background to text content.
 * Features:
 * - Transparent background (no solid masking needed)
 * - Optional yellow tinting for the video effect
 */
export function VideoText({
  src,
  children,
  className,
  textClassName,
}: VideoTextProps) {
  return (
    <div className={cn("relative w-full h-full inline-block", className)}>
      {/* 
        This wrapper uses the text-clipping trick:
        - The video is inside a container that has background-clip: text.
        - Text color is set to transparent.
        - The video itself is shown through the transparent text.
        Note: Modern browsers support background: clip with complex elements via specific techniques, 
        but the most reliable cross-browser way for VIDEO is using mask-image.
      */}
      <div 
        className="w-full h-full relative"
        style={{
          display: 'grid',
          placeItems: 'start',
        }}
      >
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
             filter: 'sepia(1) saturate(10) hue-rotate(-15deg) brightness(1.2)', // Brand yellow tint
             clipPath: 'content-box',
             WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='0' y='50%25' dy='.35em' text-anchor='start' font-family='Montserrat, sans-serif' font-weight='900' font-size='80px' fill='white' style='text-transform: uppercase;'%3E${encodeURIComponent(children)}%3C/text%3E%3C/svg%3E")`,
             WebkitMaskRepeat: 'no-repeat',
             WebkitMaskSize: 'contain',
             maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='0' y='50%25' dy='.35em' text-anchor='start' font-family='Montserrat, sans-serif' font-weight='900' font-size='80px' fill='white' style='text-transform: uppercase;'%3E${encodeURIComponent(children)}%3C/text%3E%3C/svg%3E")`,
             maskRepeat: 'no-repeat',
             maskSize: 'contain',
          }}
        />
        
        {/* Invisible text for SEO and layout sizing */}
        <span className={cn("opacity-0 pointer-events-none select-none", textClassName)}>
          {children}
        </span>
      </div>
    </div>
  );
}
