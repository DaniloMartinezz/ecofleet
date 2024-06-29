import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import { Bars3Icon } from '@heroicons/react/24/outline';
import VehicleData from '../components/maintenance/vehicleData';
import MensalProgress from '../components/maintenance/mensalProgress';
import CardDatasMaintenance from '../components/maintenance/cardDatasMaintenance';
import CardDatePicker from '../components/cardDatePicker';
import CardCarSimpleInfo from '../components/maintenance/cardCarSimpleInfo';
import CardResultsGraph from '../components/cardResultsGraph';
import Header from '../components/header';

const Maintenance: React.FC = () => {
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
        <Header title="Manutenção" isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <hr />
        <motion.div
          className="md:flex md:items-center md:justify-around py-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="py-5 md:py-0" variants={itemVariants}>
            <VehicleData />
          </motion.div>
          <motion.div className="py-5 md:py-0" variants={itemVariants}>
            <MensalProgress />
          </motion.div>
        </motion.div>
        <motion.div
          className="py-5 md:py-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <CardDatasMaintenance />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:flex md:items-center md:justify-around"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="py-5 flex justify-center" variants={itemVariants}>
            <CardDatePicker />
          </motion.div>
          <motion.div className="py-5" variants={itemVariants}>
            <CardCarSimpleInfo />
          </motion.div>
          <motion.div className="py-5" variants={itemVariants}>
            <CardResultsGraph />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance;
