import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={`py-20 lg:py-24 ${className}`} id={id}>
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </section>
  );
}
