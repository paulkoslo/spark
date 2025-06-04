import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </section>
  );
}
