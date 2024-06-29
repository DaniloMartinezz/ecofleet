import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import DashboardGraph from '../components/dashboard/cardDashboardGraph';
import CardDashboard from '../components/dashboard/cardDashboard';
import CardBarGraph from '../components/dashboard/cardBarGraph';
import CardTasks from '../components/cardTasks';
import CardCupom from '../components/cardCupom';
import CardFriendsRanking from '../components/cardFriendsRanking';
import CardId from '../components/dashboard/cardId';
import CardEmpresarialRank from '../components/dashboard/cardEmpresarialRank';
import Header from '../components/header';

const Dashboard: React.FC = () => {
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
        <Header title="Dashboard" isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <hr />
        <motion.div
          className="md:flex md:justify-center md:items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col justify-center items-center md:items-start" variants={itemVariants}>
            <div className="hidden md:block py-4">
              <CardDashboard />
            </div>
            <div className="block md:hidden py-4">
              <DashboardGraph />
            </div>
            <div className="hidden md:block py-4">
              <DashboardGraph />
            </div>
          </motion.div>
          <motion.div className="p-3 md:p-0 md:pl-5" variants={itemVariants}>
            <CardBarGraph />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:flex md:justify-around md:ml-[4rem] md:py-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="p-3 md:p-0" variants={itemVariants}>
            <CardTasks />
          </motion.div>
          <motion.div className="p-3 md:p-0" variants={itemVariants}>
            <CardId />
          </motion.div>
          <motion.div className="p-3 md:p-0" variants={itemVariants}>
            <CardCupom />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:flex md:justify-center md:items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="p-3 md:p-0 md:pr-5 md:py-5" variants={itemVariants}>
            <CardFriendsRanking />
          </motion.div>
          <motion.div className="p-3 md:p-0" variants={itemVariants}>
            <CardEmpresarialRank />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
