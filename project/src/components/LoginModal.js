import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, User, Lock } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setUsername('');
    setPassword('');
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: -20 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Inicia Sesión para Jugar</h3>
          <motion.button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div 
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <User className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700"
              required
            />
          </motion.div>
          <motion.div 
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Lock className="w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700"
              required
            />
          </motion.div>
          {error && (
            <motion.p 
              className="text-red-600 text-sm text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}
          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Iniciar Sesión
          </motion.button>
          <motion.button
            type="button"
            onClick={onClose}
            className="w-full py-3 text-gray-600 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancelar
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;