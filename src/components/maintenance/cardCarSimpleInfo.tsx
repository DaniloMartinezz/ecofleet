import React from 'react';
import ToyotaCar from '../../assets/toyotaCar.png';
import { useTheme } from '../../context/ThemeContext';

const CardCarSimpleInfo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`shadow-md rounded-2xl p-3 font-inter relative overflow-hidden ${theme === 'dark' ? 'bg-dark-100' : 'bg-white'}`}>
      <div className="relative w-full h-full flex justify-center items-center">
        <img src={ToyotaCar} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111C44] opacity-60 rounded-2xl"></div>
      </div>
      <div className="text-inter p-4">
        <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-light-200' : 'text-dark-200'} md:mb-20`}>Toyota Corolla</h1>
      </div>
    </div>
  );
};

export default CardCarSimpleInfo;
