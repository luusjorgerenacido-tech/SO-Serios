import React, { useState } from 'react';

const Usuarios = () => {
  const [formData, setFormData] = useState({ nombre: '', usuario: '', contrasena: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (formData.nombre && formData.usuario && formData.contrasena) {
      // Simular guardado en localStorage
      const userData = {
        nombre: formData.nombre,
        usuario: formData.usuario,
        contrasena: formData.contrasena // En producción, hashea esto!
      };
      localStorage.setItem('registeredUser', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true'); // Auto-login después de registro
      alert(`¡Usuario ${formData.nombre} registrado y logueado exitosamente! Ve a Inicio y juega. (Simulación local)`);
      setSubmitted(true);
      setFormData({ nombre: '', usuario: '', contrasena: '' });
    } else {
      setError('Por favor, llena todos los campos.');
    }
  };

  if (submitted) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-md">
        <div className="bg-green-100 border border-green-400 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">¡Registro Exitoso!</h2>
          <p className="text-green-700">Gracias por registrarte. Ahora estás logueado – ve a Inicio y prueba un juego.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Registrar Otro
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registro de Usuarios</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de Usuario</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Tu usuario único"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Contraseña segura"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Registrarse y Entrar
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">
        Nota: Datos guardados localmente. Para real, conecta Supabase.
      </p>
    </main>
  );
};

export default Usuarios;