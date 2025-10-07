import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const GameCard = ({ title, description, onClick, icon: Icon }) => {
  return (
    <motion.div 
      onClick={onClick} 
      className="block bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <motion.h3 
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.button 
          className="flex items-center justify-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-4 h-4" />
          <span>Jugar</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameCard;