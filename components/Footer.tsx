"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const NAV_LINKS = [
  { label: "Our Story",    href: "#about"   },
  { label: "Menu",         href: "#menu"    },
  { label: "Reservations", href: "#reserve" },
  { label: "Hours",        href: "#hours"   },
];

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-dark shadow-lg flex items-center justify-center transition-colors"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-brand-dark py-10 md:py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">

          {/* Logo */}
          <p className="font-playfair text-2xl text-brand-gold-light">
            Fong Sing Restaurant
          </p>

          {/* Address & phone */}
          <p className="text-white/50 text-sm">
            278 Lacewood Drive, Halifax, NS &middot; (902) 443-2010
          </p>

          {/* Nav links */}
          <nav className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/20" aria-hidden="true">&middot;</span>}
                <a
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/30 text-xs pt-2">
            &copy; 2026 Fong Sing Restaurant &middot; Halifax, Nova Scotia &middot; All Rights Reserved
          </p>

        </div>
      </footer>

      <BackToTop />
    </>
  );
}
