import './globals.css';
import React from 'react';
import Hero from '../components/Hero';

export const metadata = {
  title: 'Dataspark',
  description: 'Data science that delivers ROI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#000033] text-white overflow-y-auto overscroll-none">
        <Hero />
        {children}
      </body>
    </html>
  );
}
