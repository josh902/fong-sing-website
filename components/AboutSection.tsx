"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const PILLS = [
  "Canadian Chinese",
  "Authentic Vietnamese",
  "Family Recipes",
  "Fresh Daily",
  "Dine-In & Takeout",
];

const leftVariant: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rightVariant: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left: image placeholder */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black">
            <Image
              src="/images/logo.png"
              alt="Fong Sing Restaurant"
              fill
              className="object-contain p-6"
            />
          </div>
          {/* Circular badge */}
          <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-brand-gold shadow-lg flex items-center justify-center">
            <span className="text-brand-dark font-bold text-center leading-tight text-[11px]">
              30+<br />Years<br />Halifax
            </span>
          </div>
        </motion.div>

        {/* Right: text content */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-3">
            Our Story
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark leading-snug mb-6">
            Where East Meets East —<br />At Home in Halifax
          </h2>
          <p className="text-brand-dark/70 leading-relaxed mb-4">
            Fong Sing has proudly served Halifax for over 30 years. We bring you
            the comforting warmth of Canadian-style Chinese cooking alongside the
            bold, fragrant flavours of authentic Vietnamese cuisine.
          </p>
          <p className="text-brand-dark/70 leading-relaxed mb-8">
            Every dish is made fresh, every day, from family recipes passed down
            through generations. Whether you&apos;re craving a steaming bowl of Pho
            or crispy Honey Garlic Ribs — you&apos;ll find it here.
          </p>
          <div className="flex flex-wrap gap-2">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 rounded-full border border-brand-gold/50 text-brand-gold text-xs font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
