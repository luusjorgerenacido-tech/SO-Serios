import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Objetivo from './pages/Objetivo';
import Informacion from './pages/Informacion';
import Usuarios from './pages/Usuarios';
import Simulacion from './pages/Simulacion';
import Procesos from './pages/Procesos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objetivo" element={<Objetivo />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/juego/simulacion" element={<Simulacion />} />
          <Route path="/juego/procesos" element={<Procesos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;