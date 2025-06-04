"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import LetterGlitch from "./LetterGlitch";

export default function Hero() {
  return (
    <Section className="relative flex items-center justify-center min-h-screen text-center bg-[#001F3F]">
      {/* Letter Glitch Background */}
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          className="text-8xl font-extrabold tracking-tight text-white drop-shadow-[0_0_8px_#00E2FF]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DATASPARK
        </motion.h1>
      </div>

      <motion.a
        href="/contact"
        aria-label="Book a Discovery Call"
        className="absolute bottom-10 px-6 py-3 rounded-md bg-brand-500 text-white drop-shadow-[0_0_4px_#00E2FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Book a Discovery Call
      </motion.a>
    </Section>
  );
}
