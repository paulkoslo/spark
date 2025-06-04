"use client";

import LetterGlitch from "./LetterGlitch";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] text-center bg-[#001F3F]">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </section>
  );
}
