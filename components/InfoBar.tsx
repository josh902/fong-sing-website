"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Clock, Bike } from "lucide-react";

const ITEMS = [
  { Icon: MapPin,  text: "278 Lacewood Drive, Halifax, NS"    },
  { Icon: Phone,   text: "(902) 443-2010"                     },
  { Icon: Clock,   text: "Mon–Fri 11:30AM · Sat–Sun 12:00PM" },
  { Icon: Bike,    text: "Uber Eats · Skip · DoorDash"        },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function InfoBar() {
  return (
    <div className="w-full bg-brand-wood py-4 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-2 gap-x-2 gap-y-4 sm:flex sm:flex-wrap sm:justify-center sm:items-center"
      >
        {ITEMS.map(({ Icon, text }, i) => (
          <Fragment key={text}>
            {i > 0 && (
              <div
                aria-hidden="true"
                className="hidden sm:block h-6 w-px bg-white/20 mx-2"
              />
            )}
            <motion.div
              variants={item}
              className="flex items-start gap-2 px-2 py-0.5 sm:items-center sm:gap-2.5 sm:px-4 sm:py-1.5"
            >
              <Icon className="h-4 w-4 text-brand-gold shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-xs sm:text-sm text-white leading-snug">{text}</span>
            </motion.div>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
