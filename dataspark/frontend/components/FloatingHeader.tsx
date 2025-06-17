"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FloatingHeader({
  headerWidth = '95%',
  maxWidth = 'max-w-8xl',
  bgColor = 'bg-black',
  textColor = 'text-white',
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-green-500',
  bgOpacity = 0.8, // Adjusted to control background transparency
  buttonWidth = 'auto', // New control variable for button width
  buttonHeight = '40px', // New control variable for button height
  headerHeight = 'auto', // New control variable for header height
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.querySelector('nav');
      if (navElement && !navElement.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed ${isScrolled ? 'top-0' : 'top-4'} left-1/2 transform -translate-x-1/2 ${bgColor} backdrop-blur-lg shadow-lg flex items-center justify-between pl-6 pr-0 py-2 z-50 ${maxWidth} transition-all duration-300`}
      style={{
        width: headerWidth,
        height: headerHeight, // Apply header height
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        borderRadius: '1rem',
      }}
    >
      <div className="flex items-center gap-2">
        <span className={`text-xl font-bold ${textColor}`}>DolphinData</span>
      </div>
      <nav className="flex items-center gap-4 relative">
        <Link href="#demo" className="text-sm hover:text-blue-500 transition">Demo</Link>
        <Link href="#en" className="text-sm hover:text-blue-500 transition">EN</Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} ${textColor} px-8 py-4 text-sm transition-all duration-300 rounded-full mr-2 flex items-center justify-center`}
          style={{
            width: buttonWidth, // Apply button width
            height: buttonHeight, // Apply button height
            backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
            borderRadius: '1rem',
          }}
        >
          Menu
        </button>
        {isOpen && (
          <div
            className="absolute right-0 top-full mt-2 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl shadow-2xl py-6 px-8 w-[300px] transition-transform duration-300 transform scale-100 opacity-100"
            style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
          >
            {[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about-us' }, { label: 'Services', href: '#' }, { label: 'Contact', href: '#' }].map((item, index) => (
              <motion.div
                key={index}
                className="block px-8 py-4 text-xl transition w-full"
                onMouseEnter={() => setCurrentIndex(index)}
                onMouseLeave={() => setCurrentIndex(-1)}
                animate={{
                  backgroundColor: currentIndex === index ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                  filter: currentIndex === index ? 'blur(0px)' : 'blur(1.3px)',
                  borderRadius: '1rem',
                }}
                transition={{ duration: 0.3 }}
              >
                <Link href={item.href} className="w-full h-full block">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
