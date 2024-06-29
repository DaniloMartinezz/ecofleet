import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../assets/profile.png';
import {
  XMarkIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  UsersIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({
  isOpen,
  setIsOpen,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 w-64 md:w-[25rem] ${theme === 'dark' ? 'bg-dark-200' : 'bg-white'
          } shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:shadow-none z-50`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-4 md:hidden">
            <div className={`text-lg ${theme === 'dark' ? 'text-light-100' : 'text-dark-100'}`}>Ecofleet Manager</div>
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className={`w-6 h-6 ${theme === 'dark' ? 'text-light-100' : 'text-black'}`} />
            </button>
          </div>
          <nav className="flex-1">
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? (theme === 'dark' ? 'bg-dark-100' : 'bg-gray-200') : (theme === 'dark' ? 'hover:bg-dark-100' : 'hover:bg-gray-100')
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowTrendingUpIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span className={theme === 'dark' ? 'text-light-200' : 'text-dark-100'}>Dashboard</span>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/monitoring"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? (theme === 'dark' ? 'bg-dark-100' : 'bg-gray-200') : (theme === 'dark' ? 'hover:bg-dark-100' : 'hover:bg-gray-100')
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <BoltIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span className={theme === 'dark' ? 'text-light-200' : 'text-dark-100'}>Monitoramento</span>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/maintenance"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? (theme === 'dark' ? 'bg-dark-100' : 'bg-gray-200') : (theme === 'dark' ? 'hover:bg-dark-100' : 'hover:bg-gray-100')
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <UsersIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span className={theme === 'dark' ? 'text-light-200' : 'text-dark-100'}>Manutenção</span>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? (theme === 'dark' ? 'bg-dark-100' : 'bg-gray-200') : (theme === 'dark' ? 'hover:bg-dark-100' : 'hover:bg-gray-100')
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <LightBulbIcon className="w-6 h-6 mr-2 text-green-green" />
                  <span className={theme === 'dark' ? 'text-light-200' : 'text-dark-100'}>Perfil</span>
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
                <div className={`font-semibold ${theme === 'dark' ? 'text-light-200' : 'text-dark-100'}`}>Danilo Martinez</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
