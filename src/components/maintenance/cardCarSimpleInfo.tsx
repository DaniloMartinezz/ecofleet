// src/components/cardCupom.tsx
import React from 'react';
import ToyotaCar from '../../assets/toyotaCar.png';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';

export default function cardCarSimpleInfo() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-3 font-inter relative overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center">
        <img src={ToyotaCar} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111C44] opacity-60 rounded-2xl"></div>

      </div>
      <div className="text-inter p-4 ">
        <h1 className="text-2xl font-semibold text-dark-200">Toyota Corolla</h1>
      </div>
    </div>
  );
}
