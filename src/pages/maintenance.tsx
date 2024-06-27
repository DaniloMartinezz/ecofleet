import React, { useState } from 'react';
import Navbar from '../components/navbar';

import { Bars3Icon } from '@heroicons/react/24/outline';
import VehicleData from '../components/maintenance/vehicleData';
import MensalProgress from '../components/maintenance/mensalProgress';
import CardDatasMaintenance from '../components/maintenance/cardDatasMaintenance';
import CardDatePicker from '../components/cardDatePicker';
import CardCarSimpleInfo from '../components/maintenance/cardCarSimpleInfo';
import CardResultsGraph from '../components/cardResultsGraph';

const Maintenance: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="pb-3 text-2xl text-dark-300">Manutenção</h1>
          {!isMenuOpen && (
            <button className="md:hidden text-green-green" onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className="w-6 h-6 mb-3"/>
            </button>
          )}
        </div>
        <hr />
        <div className="py-5">
            <VehicleData/>
        </div>
        <div className="py-5">
            <MensalProgress/>
        </div>
        
        <div className="py-5">
            <CardDatasMaintenance/>
        </div>

        <div className="py-5 flex justify-center ">
            <CardDatePicker />
        </div>
        <div className="py-5">
            <CardCarSimpleInfo/>
        </div>
        <div className="py-5">
          <CardResultsGraph/>
        </div>


      </div>
    </div>
  );
};

export default Maintenance;
