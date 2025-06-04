import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm ring-1 ring-cyan-400/30 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
