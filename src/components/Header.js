import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Target, Info, Users, LogOut, Settings } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(logged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('registeredUser');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const navItems = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/objetivo', label: 'Objetivo', icon: Target },
    { to: '/informacion', label: 'Información', icon: Info },
    { to: '/usuarios', label: isLoggedIn ? 'Perfil' : 'Usuarios', icon: Users },
    ...(isLoggedIn ? [{ to: '/', label: 'Salir', icon: LogOut, onClick: handleLogout }] : [])
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center p-2">
        <Settings className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-semibold">SO Games</span>
    </div>
  );

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <Logo />
          <h1 className="text-3xl font-bold text-center flex-1">Juegos serios de sistemas operativos</h1>
          <div className="w-10" /> {/* Spacer para balance */}
        </div>
        <nav className="flex justify-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <button
                key={item.to || 'logout'}
                onClick={item.onClick || (() => window.location.href = item.to)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-blue-600 font-semibold shadow-md'
                    : 'hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;