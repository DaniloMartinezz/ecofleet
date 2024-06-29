import React from 'react';
import AvatarCirclesDemo from './avatarMonitoring';
import LogoMonitoring from '../../assets/logoMonitoring.png';
import { ClockIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const CardMonitoringFeedback: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow p-6 md:w-[90%] ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <div className="flex items-center">
        <div className="p-2 bg-green-green rounded-xl w-12 h-12 flex justify-center items-center">
          <img src={LogoMonitoring} alt="Logo" className="" />
        </div>
        <div className="pl-5">
          <h3 className={`text-sm ${theme === 'dark' ? 'text-light-400' : 'text-light-400'}`}>Fale Conosco</h3>
          <h2 className={`py-1 font-bold ${theme === 'dark' ? 'text-light-200' : 'text-blueText-100'}`}>Como podemos melhorar?</h2>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className={`text-2xl font-inter font-semibold ${theme === 'dark' ? 'text-light-300' : 'text-dark-100'}`}>Realize a pesquisa de Satisfação do cliente!</h1>
        <div className="flex items-center">
          <ClockIcon className="w-6 h-6 text-green-green" />
          <p className={`pl-3 font-semibold ${theme === 'dark' ? 'text-light-200' : 'text-dark-200'}`}>05 minutos</p>
        </div>
      </div>
      <div className="py-6 flex justify-between items-center">
        <AvatarCirclesDemo />
        <button className="p-3 px-8 bg-green-green text-white rounded-2xl">Começar</button>
      </div>
    </div>
  );
};

export default CardMonitoringFeedback;
