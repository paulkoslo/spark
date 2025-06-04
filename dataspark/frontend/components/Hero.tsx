'use client'

import { HeroGradient } from '@reactbits/ui'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="text-center py-20">
      {/* Visual hero section using ReactBits */}
      <HeroGradient className="mx-auto max-w-2xl">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Data Science that Delivers ROI
        </motion.h1>
        <p className="mb-6 text-gray-600">
          Spend less time guessing, more time growing.
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-500 text-white px-6 py-3 rounded-md"
        >
          Book a Call
        </a>
      </HeroGradient>
    </section>
  )
}
