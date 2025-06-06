"use client";

import LetterGlitch from "./LetterGlitch";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-center bg-[#000033]">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
      />
    </section>
  );
}
