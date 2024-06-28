import React, { useState } from 'react';
import Navbar from '../components/navbar';
import DashboardGraph from '../components/dashboard/cardDashboardGraph';
import CardDashboard from '../components/dashboard/cardDashboard';
import CardBarGraph from '../components/dashboard/cardBarGraph';
import CardTasks from '../components/cardTasks';
import CardCupom from '../components/cardCupom';
import CardFriendsRanking from '../components/cardFriendsRanking';
import { Bars3Icon } from '@heroicons/react/24/outline';
import CardId from '../components/dashboard/cardId';
import CardEmpresarialRank from '../components/dashboard/cardEmpresarialRank';

const Dashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="pb-3 text-2xl text-dark-300">Dashboard</h1>
          {!isMenuOpen && (
            <button className="md:hidden text-green-green" onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className="w-6 h-6 mb-3"/>
            </button>
          )}
        </div>
        <hr />
        <div className="md:flex md:justify-center md:items-center  ">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="hidden md:block py-4">
            <CardDashboard />
          </div>
          <div className="block md:hidden py-4">
            <DashboardGraph />
          </div>
          <div className="hidden md:block py-4">
            <DashboardGraph />
          </div>
        </div>

        <div className="p-3 md:p-0 md:pl-5">
          <CardBarGraph />
        </div>
        </div>

          <div className="md:flex md:justify-around md:ml-[4rem] md:py-5">
          <div className="p-3 md:p-0">
          <CardTasks />
        </div>
        <div className="p-3 md:p-0">
          <CardId/>
        </div>
        <div className="p-3 md:p-0">
          <CardCupom />
        </div>
          </div>
          <div className="md:flex md:justify-center md:items-center">
          <div className="p-3 md:p-0 md:pr-5 md:py-5">
          <CardFriendsRanking />
        </div>
        <div className="p-3 md:p-0">
          <CardEmpresarialRank/>
        </div>
          </div>

      </div>
    </div>
  );
};

export default Dashboard;
