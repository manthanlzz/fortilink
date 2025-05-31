'use client';

import { useState, useEffect, useRef } from 'react';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return; // Ignore negative scroll (over-scroll)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and past 100px — hide header
        setShowHeader(false);
      } else {
        // Scrolling up — show header
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        borderRadius: 0,
      }}
    >
      {/* Main Nav Bar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-5 max-w-full mx-auto">
        {/* Left: Fortilink */}
        <div className="pl-1 md:pl-4 flex-shrink-0">
          <span className="text-white font-bold text-l select-none cursor-default">
            Fortilink
          </span>
        </div>

        {/* Right: Nav + Menu */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-white/80 text-l font-medium tracking-wide">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Updates
            </a>
            <a href="#" className="hover:text-white transition">
              Customer
            </a>
            <a href="#" className="hover:text-white transition">
              Help
            </a>
          </nav>
          <MenuIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-5 w-5 md:hidden cursor-pointer text-white"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-all duration-300 ease-out overflow-hidden md:hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'steps(12, end)' }}
      >
        <div className="flex flex-col gap-4 pt-6 text-white/90 bg-transparent rounded-none px-4">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Updates
          </a>
          <a href="#" className="hover:underline">
            Customer
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <button className="bg-white text-black px-4 py-2 rounded font-semibold tracking-tight mt-4">
            Get for free
          </button>
        </div>
      </div>
    </header>
  );
};
