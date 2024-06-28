// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../assets/profile.png'
import Maintenance from '../pages/maintenance';
import {
  XMarkIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  UsersIcon,
  PresentationChartBarIcon,
  LightBulbIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const Navbar: React.FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 w-64 md:w-[25rem] bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:shadow-none z-50`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-4 md:hidden">
            <div className="text-lg ">Ecofleet Manager</div>
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className="w-6 h-6 text-black" />
            </button>
          </div>
          <nav className="flex-1">
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowTrendingUpIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/monitoring"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <BoltIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span>Monitoramento</span>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/maintenance"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <UsersIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span>Manutenção</span>
                </NavLink>
              </li>



              <li className="mb-4">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <LightBulbIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span>Perfil</span>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Cog6ToothIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-auto">
            <div className="flex items-center p-2">
              <img
                src={Profile}
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <div className="font-semibold">Danilo Martinez</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
