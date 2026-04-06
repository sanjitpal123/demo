"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
  alt?: string;
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!src) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 z-[10000] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full max-w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
          >
            <img
              src={src}
              alt={alt || "Full screen showcase"}
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
            
            {/* Elegant Glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10 shadow-[0_0_100px_rgba(245,166,35,0.15)]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
