"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const HOURS = [
  { day: "Mon – Thurs", time: "11:30AM – 8:30PM" },
  { day: "Friday",      time: "11:30AM – 9:00PM"  },
  { day: "Saturday",    time: "12:00PM – 9:00PM"  },
  { day: "Sunday",      time: "12:00PM – 8:30PM"  },
];

const DELIVERY_PLATFORMS = ["Uber Eats", "Skip the Dishes", "DoorDash"];

// ── Animation variants ────────────────────────────────────────────────────────

const leftVariant: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rightVariant: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
};

// ── Main component ────────────────────────────────────────────────────────────

export default function HoursSection() {
  return (
    <section id="hours" className="bg-brand-wood py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        {/* ── Left: Opening Hours ── */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl text-brand-gold mb-8">
            Opening Hours
          </h2>

          <div className="space-y-4">
            {HOURS.map(({ day, time }) => (
              <div key={day} className="flex items-baseline gap-3">
                <span className="text-white/60 text-sm shrink-0 w-28">{day}</span>
                {/* Dotted leader line */}
                <span
                  className="flex-1 border-b border-dotted border-white/25"
                  aria-hidden="true"
                />
                <span className="text-white font-medium text-sm shrink-0">{time}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-white/40 text-xs italic">
            Last seating &amp; delivery 30 min before closing
          </p>
        </motion.div>

        {/* ── Right: Delivery & Find Us ── */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-playfair text-3xl text-brand-gold">
            Delivery &amp; Location
          </h2>

          {/* Delivery note */}
          <p className="text-white/70 text-sm leading-relaxed">
            Free delivery on orders over $20 (cash) within 5km &middot; Debit/Credit: $3 charge
          </p>

          {/* Platform badges */}
          <div className="flex flex-wrap gap-2">
            {DELIVERY_PLATFORMS.map(platform => (
              <span
                key={platform}
                className="px-3 py-1 rounded-full border border-brand-gold/50 text-brand-gold-light text-xs font-medium"
              >
                {platform}
              </span>
            ))}
          </div>

          {/* Contact & location details */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
              <span className="text-white/80 text-sm">
                278 Lacewood Drive, Halifax, NS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-gold shrink-0" />
              <span className="text-white/80 text-sm">(902) 443-2010</span>
            </div>
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="h-4 w-4 text-brand-gold shrink-0" />
              <span className="text-white/80 text-sm">
                Dine-In &middot; Takeout &middot; Delivery &middot; Catering
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
