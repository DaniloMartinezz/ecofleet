import React from 'react';
import { FaFingerprint } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const CardId: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow-md p-6 w-full md:w-96 ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <div className="flex mb-4">
        <FaFingerprint className="text-green-green w-20 h-20" />
      </div>
      <div>
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-light-400' : 'text-dark-100'}`}>Cadastre sua Digital!</h2>
        <p className={`text-medium mb-4 ${theme === 'dark' ? 'text-light-500' : 'text-dark-500'}`}>Acesse a Eco pela digital.</p>
        <button className="bg-green-green w-full text-white font-bold py-2 px-4 rounded-lg">
          Cadastrar Digital
        </button>
      </div>
    </div>
  );
};

export default CardId;
