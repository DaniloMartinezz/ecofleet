import React from 'react';
import ToyotaBackground from '../../assets/toyotaBackground.png';
import ToyotaCar from '../../assets/toyotaCar.png';
import ProfileMe from '../../assets/profileMe.png';

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow w-full mx-auto overflow-hidden p-4">
      <div className="relative">
        <img src={ToyotaBackground} alt="Cover" className="hidden md:block w-full h-40 object-cover rounded-[2rem]" />
        <img src={ToyotaCar} alt="Cover" className="block md:hidden w-full h-40 object-cover rounded-lg" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-24">
          <div className="rounded-full overflow-hidden border-4 border-white w-24 h-24 mt-32">
            <img 
              src={ProfileMe} 
              alt="Profile" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-xl font-bold text-dark-100">Danilo Martinez Belem</h1>
        <p className="text-sm font-semibold text-dark-200">Desenvolvedor Frontend</p>
        <div className="flex justify-center space-x-8 mt-4">
          <div className="text-center">
            <p className="text-lg font-bold text-dark-300">17</p>
            <p className="text-sm text-dark-500">Seguidores</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-dark-300">120</p>
            <p className="text-sm text-dark-500">Seguindo</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-dark-300">45</p>
            <p className="text-sm text-dark-500">Amigos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
