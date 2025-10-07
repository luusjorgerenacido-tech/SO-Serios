import React from 'react';

const Objetivo = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Objetivo del Proyecto</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Este proyecto busca hacer que el aprendizaje de sistemas operativos sea accesible y entretenido para estudiantes y entusiastas. A través de juegos serios, los usuarios podrán entender conceptos complejos como gestión de procesos, memoria y scheduling sin aburrirse.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          El objetivo principal es fomentar una comprensión práctica y divertida, mejorando la retención de conocimiento en entornos educativos.
        </p>
      </div>
    </main>
  );
};

export default Objetivo;