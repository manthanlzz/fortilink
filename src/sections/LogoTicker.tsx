'use client';

import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className="relative py-12 bg-white overflow-hidden">
      {/* Top gradient to blend smoothly with Hero background */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: '-50%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {/* Logo Set 1 */}
            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="Quantum logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="Celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />

            {/* Logo Set 2 for seamless loop */}
            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="Quantum logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="Celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
