import React from 'react';
import { FcGoogle } from 'react-icons/fc'; 
import { FaApple } from 'react-icons/fa'; 

const SocialButtons: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-6">
      <button
        className="flex items-center justify-center w-[80%] py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FcGoogle className="mr-2 w-5 h-5" />
        Sign in with Google
      </button>
      <button
        className="flex items-center justify-center w-[80%] py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <FaApple className="mr-2 w-5 h-5" />
        Sign in with Apple
      </button>
    </div>
  );
};

export default SocialButtons;
