import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import LoginModal from '../components/LoginModal';
import { Settings, Users } from 'lucide-react';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentGame, setCurrentGame] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(logged);
  }, []);

  const handlePlay = (gameType) => {
    if (!isLoggedIn) {
      const registered = localStorage.getItem('registeredUser');
      if (!registered) {
        alert('Regístrate primero en la sección Usuarios.');
        return;
      }
      setCurrentGame(gameType);
      setShowLogin(true);
      setLoginError('');
    } else {
      // Si ya logueado, ve directo
      window.location.href = gameType === 'simulacion' ? '/juego/simulacion' : '/juego/procesos';
    }
  };

  const handleLogin = (username, password) => {
    const registered = JSON.parse(localStorage.getItem('registeredUser'));
    if (username === registered.usuario && password === registered.contrasena) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginError('');
      // Ve al juego
      window.location.href = currentGame === 'simulacion' ? '/juego/simulacion' : '/juego/procesos';
    } else {
      setLoginError('Usuario o contraseña incorrectos. Regístrate de nuevo.');
    }
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <LoginModal
        isOpen={showLogin}
        onClose={closeLogin}
        onLogin={handleLogin}
        error={loginError}
      />
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Bienvenido al mundo de los juegos educativos!</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {isLoggedIn 
            ? '¡Estás logueado! Explora los juegos libremente.' 
            : 'Regístrate y loguéate para desbloquear las simulaciones interactivas sobre sistemas operativos.'
          }
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <GameCard
          title="Juego de simulación de sistemas operativos"
          description="Simula el funcionamiento básico de un SO, gestiona recursos y procesos."
          onClick={() => handlePlay('simulacion')}
          icon={Settings}
        />
        <GameCard
          title="Juego de procesos en sistemas operativos"
          description="Maneja colas de procesos, prioridades y scheduling de manera lúdica."
          onClick={() => handlePlay('procesos')}
          icon={Users}
        />
      </div>
    </main>
  );
};

export default Home;