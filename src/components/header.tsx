import React from 'react';
import { Bars3Icon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  title: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ title, isMenuOpen, setIsMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center py-4">
      <h1 className={`text-2xl ${theme === 'dark' ? 'text-light-100' : 'text-dark-300'}`}>{title}</h1>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2">
          {theme === 'dark' ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
        {!isMenuOpen && (
          <button className="md:hidden text-green-green" onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
