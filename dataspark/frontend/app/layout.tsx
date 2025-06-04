import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Dataspark',
  description: 'Data science that delivers ROI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#001F3F] text-white overflow-y-auto">{children}</body>
    </html>
  );
}
