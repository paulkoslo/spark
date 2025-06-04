import './globals.css';
import React from 'react';
import Hero from '../components/Hero';

export const metadata = {
  title: 'Dataspark',
  description: 'Data science that delivers ROI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overscroll-none">
      <body className="bg-[#041B56] text-slate-100 overscroll-none">
        <Hero />
        {children}
      </body>
    </html>
  );
}
