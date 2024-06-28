import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

const CardId: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full  md:w-96">
      <div className="flex  mb-4">
        <FaFingerprint className="text-green-green w-20 h-20" />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-dark-100 mb-2">Cadastre sua Digital!</h2>
        <p className="text-medium text-dark-500 mb-4">Acesse a Eco pela digital.</p>
        <button className="bg-green-green w-full text-white font-bold py-2 px-4 rounded-lg">
          Cadastrar Digital
        </button>
      </div>
    </div>
  );
};

export default CardId;
