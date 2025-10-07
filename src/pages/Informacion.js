import React from 'react';

const Informacion = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Información del Proyecto</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">¿Qué es esto?</h3>
          <p className="text-gray-700">Una plataforma educativa con juegos serios diseñados para enseñar fundamentos de sistemas operativos. Desarrollado por educadores apasionados por la tecnología.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Propósito Educativo</h3>
          <p className="text-gray-700">Ayudar a estudiantes de informática a visualizar y practicar conceptos abstractos, combinando teoría con interacción gamificada para un aprendizaje más efectivo.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Características</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Simulaciones interactivas de SO.</li>
            <li>Registro de usuarios para progreso personalizado.</li>
            <li>Secciones informativas y objetivos claros.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Informacion;