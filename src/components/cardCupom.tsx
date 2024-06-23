// src/components/cardCupom.tsx
import React from 'react';
import testeShadow from '../assets/testeShadow.png';
import StarbucksBg from '../assets/StarbucksBg.png';
import StarbucksLogo from '../assets/StarbucksLogo.png';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';

export default function cardCupom() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-3 font-inter relative overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center">
        <img src={StarbucksBg} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111C44] rounded-2xl"></div>
        <img
          src={StarbucksLogo}
          alt="Starbucks Logo"
          className="absolute bottom-[1%] left-5 transform translate-y-1/2  w-12"
        />
      </div>
      <div className="text-inter pt-8 ">
        <h1 className="text-xl font-semibold text-dark-300">Starbucks</h1>
        <h2 className="flex items-center text-light-400"><CursorArrowRaysIcon className=" h-6 w-6"/> 10% OFF - CUPOM Ecofleet </h2>
      </div>
    </div>
  );
}
