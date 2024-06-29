import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import CardTotalCostGraph from '../components/cardTotalCoastGraph';
import CardProgress from '../components/cardProgress';
import CardDatePicker from '../components/cardDatePicker';
import CardMonitoringDailyGraph from '../components/monitoring/cardMonitoringDailyGraph';
import CardMonitoringFeedback from '../components/monitoring/cardMonitoringFeedback';
import CardResultsGraph from '../components/cardResultsGraph';
import CardTasks from '../components/cardTasks';
import Header from '../components/header';

const Monitoring: React.FC = () => {
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
        <Header title="Monitoramento" isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <hr />
        <div className="md:flex md:items-center md:p-5">
          <div className="py-5 md:py-0 md:mr-5">
            <CardTotalCostGraph />
          </div>
          <div className="py-5 md:py-0">
            <CardMonitoringDailyGraph />
          </div>
        </div>
        <motion.div
          className="md:flex md:items-center md:p-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="md:mr-5" variants={itemVariants}>
            <CardProgress />
          </motion.div>
          <motion.div className="py-5 md:py-0" variants={itemVariants}>
            <CardMonitoringFeedback />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:flex md:items-center md:p-0 md:justify-around"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mt-5 flex justify-center items-center md:mr-5" variants={itemVariants}>
            <CardDatePicker />
          </motion.div>
          <motion.div className="py-5 md:py-0" variants={itemVariants}>
            <CardTasks />
          </motion.div>
          <motion.div className="py-5 md:py-0 md:mr-5" variants={itemVariants}>
            <CardResultsGraph />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Monitoring;
