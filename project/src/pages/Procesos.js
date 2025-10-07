import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users } from 'lucide-react';

const Procesos = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al Inicio</span>
        </Link>
      </motion.div>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <Users className="w-12 h-12 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Juego de Procesos en Sistemas Operativos</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Aquí iría el diseño interactivo del juego. Por ahora, explora el placeholder para simular la experiencia educativa.
        </p>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-500 text-lg">Gestión de Procesos - ¡Colas, prioridades y scheduling!</span>
        </div>
        <Link 
          to="/" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver
        </Link>
      </motion.div>
    </main>
  );
};

export default Procesos;