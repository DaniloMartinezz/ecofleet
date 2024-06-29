import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import ProfileHeader from '../components/profile/profileHeader';
import ProfileUpgrades from '../components/profile/profileUpgrades';
import ProfileInfo from '../components/profile/profileInfo';
import Header from '../components/header';

const Profile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div className="flex h-screen">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="flex-1 p-5 overflow-y-auto">
        <Header title="Meu Perfil" isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <hr />
        <motion.div
          className="py-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <ProfileHeader />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:flex"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="py-5 md:mr-5" variants={itemVariants}>
            <ProfileUpgrades />
          </motion.div>
          <motion.div className="py-5" variants={itemVariants}>
            <ProfileInfo />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
