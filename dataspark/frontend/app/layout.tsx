// Remove metadata export from this file
"use client";

import './globals.css';
import React, { useRef } from 'react';
import Hero from '../components/Hero';
import FloatingHeader from '../components/FloatingHeader';
import Crosshair from '../components/Crosshair';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <html lang="en" className="overscroll-none">
      <body className="bg-[#041B56] text-slate-100 overscroll-none">
        <div ref={containerRef} style={{ minHeight: '100vh' }}>
          <FloatingHeader />
          <Hero />
          <Crosshair containerRef={containerRef} color="#ffffff" />
          {children}
        </div>
      </body>
    </html>
  );
}
