"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #1a0800, #3a0e00, #5c1800)",
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,106,0,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Staggered content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-gold mb-6"
        >
          Canadian Chinese · Authentic Vietnamese · Halifax, NS
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="font-playfair text-4xl sm:text-5xl md:text-8xl leading-tight text-white mb-6"
        >
          Fong{" "}
          <span className="italic text-brand-gold-light">Sing</span>
          <br />
          Restaurant
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-white/70 text-base sm:text-lg max-w-lg mx-auto mb-10"
        >
          Proudly serving Halifax for over 30 years. Two culinary traditions,
          one unforgettable table.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold px-8"
          >
            <a href="#menu">Explore Our Menu</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-dark px-8"
          >
            <a href="#reserve">Make a Reservation</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Cream wave transition */}
      <div className="absolute bottom-0 inset-x-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#3d1f0d"
          />
        </svg>
      </div>
    </section>
  );
}
