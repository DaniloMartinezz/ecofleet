import React from 'react';
import StarbucksBg from '../assets/StarbucksBg.png';
import StarbucksLogo from '../assets/StarbucksLogo.png';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

export default function CardCupom() {
  const { theme } = useTheme();

  return (
    <div className={`shadow-md rounded-lg p-3 md:w-[78%] ml-1 font-inter relative overflow-hidden ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <div className="relative w-full h-full flex justify-center items-center">
        <img src={StarbucksBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111C44] rounded-2xl"></div>
        <img src={StarbucksLogo} alt="Starbucks Logo" className="absolute bottom-[1%] left-5 transform translate-y-1/2 w-12" />
      </div>
      <div className="text-inter pt-8 md:pt-3">
        <h1 className="text-xl md:text-lg font-semibold text-dark-300">Starbucks</h1>
        <h2 className="flex items-center md:text-sm text-light-400">
          <CursorArrowRaysIcon className="h-6 w-6" /> 10% OFF - CUPOM Ecofleet
        </h2>
      </div>
    </div>
  );
}
