"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="relative flex items-center justify-center min-h-[60vh] text-center">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80"
        alt="City skyline"
        fill
        priority
        className="object-cover absolute inset-0 -z-20"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Animated gradient blob */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-96 h-96 rounded-full bg-brand-500/30 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
      </motion.div>

      <div className="space-y-6 relative">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight drop-shadow-[0_0_4px_#00E2FF]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Data Science, Delivered as Growth.
        </motion.h1>
        <motion.p
          className="text-lg text-slate-300 mx-auto max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, delay: 0.2 }}
        >
          From messy spreadsheets to live dashboards—turn raw numbers into ROI.
        </motion.p>
        <motion.a
          href="/contact"
          aria-label="Book a Discovery Call"
          className="inline-block px-6 py-3 rounded-md bg-brand-500 text-white drop-shadow-[0_0_4px_#00E2FF]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, delay: 0.4 }}
        >
          Book a Discovery Call
        </motion.a>
      </div>
    </Section>
  );
}
