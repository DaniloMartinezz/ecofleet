import React from 'react';
import AvatarCirclesDemo from './avatarMonitoring';
import LogoMonitoring from '../../assets/logoMonitoring.png'
import { ClockIcon } from '@heroicons/react/24/outline';

const cardMonitoringFeedback: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 md:w-[90%]">

            <div className="flex  items-center">
                <div className="p-2 bg-green-green rounded-xl w-12 h-12  flex justify-center items-center">
                    <img src={LogoMonitoring} alt="Logo" className="" />
                </div>
                <div className="pl-5">
                    <h3 className=" text-light-400 text-sm">Fale Conosco</h3>
                    <h2 className="py-1 text-blueText-100 font-bold">Como podemos melhorar?</h2>
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className=" text-2xl font-inter text-dark-100 font-semibold">Realize a pesquisa de Satisfação do cliente!</h1>
                <div className="flex items-center"><ClockIcon className="w-6 h-6 text-green-green"/><p className="pl-3 font-semibold text-dark-200">05 minutos</p></div>
            </div>

            <div className="py-6 flex justify-between items-center">
                <AvatarCirclesDemo />
                <button className="p-3 px-8 bg-green-green text-white rounded-2xl">Começar</button>
            </div>

        </div>
    );
};

export default cardMonitoringFeedback;
