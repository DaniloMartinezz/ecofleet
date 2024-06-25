import React, { useState } from 'react';
import Navbar from '../components/navbar';

import { Bars3Icon } from '@heroicons/react/24/outline';
import CardTotalCostGraph from '../components/cardTotalCoastGraph';
import CardProgress from '../components/cardProgress'
import CardDatePicker from '../components/cardDatePicker';
const Monitoring: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="pb-3 text-2xl text-dark-300">Monitoramento</h1>
          {!isMenuOpen && (
            <button className="md:hidden text-green-green" onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className="w-6 h-6 mb-3"/>
            </button>
          )}
        </div>
        <hr />
          <div className="py-5">
            <CardTotalCostGraph/>
          </div>
          <div className="">
            <CardProgress/>
          </div>
          <div className="">
            <CardDatePicker/>
          </div>

      </div>
    </div>
  );
};

export default Monitoring;
