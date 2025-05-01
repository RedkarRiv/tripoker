import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Party from './pages/Party';
import Navbar from './components/Navbar';

const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  // Función para actualizar el estado de la navbar
  const handleNavbarToggle = (state) => {
    setIsNavbarOpen(state);
  };

  // Creamos una variable con el padding dinámico
  const paddingClass = isNavbarOpen ? 'md:pl-48' : 'md:pl-0';
  const transitionClass = "transition-all duration-300 ease-in-out"
  const baseClass = `${paddingClass} ${transitionClass}`;

  return (
    <>
      {/* Pasamos la función para manejar el toggle de la navbar */}
      <Navbar onToggle={handleNavbarToggle} />

      {/* Contenedor de las rutas */}
      <Routes>
        <Route path="/" element={<Home inheritClass={baseClass} />} />
        <Route path="/contact" element={<Contact inheritClass={baseClass} />} />
        <Route path="/party" element={<Party inheritClass={baseClass} />} />
      </Routes>
    </>
  );
};

export default App;