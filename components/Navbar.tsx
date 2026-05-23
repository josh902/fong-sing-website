"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Our Story",    href: "#about"   },
  { label: "Menu",         href: "#menu"    },
  { label: "Reservations", href: "#reserve" },
  { label: "Hours",        href: "#hours"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 bg-brand-dark/85 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-playfair text-xl text-brand-gold-light hover:text-brand-gold transition-colors"
        >
          Fong Sing Restaurant
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-brand-gold-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold"
          >
            <a href="#reserve">Reserve a Table</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-brand-gold-light hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                "bg-brand-dark border-l border-brand-wood",
                "flex flex-col pt-10 px-6"
              )}
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <span className="font-playfair text-brand-gold-light text-lg mb-8">
                Fong Sing Restaurant
              </span>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-brand-gold-light text-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <Button
                asChild
                className="mt-8 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold"
                onClick={() => setOpen(false)}
              >
                <a href="#reserve">Reserve a Table</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
