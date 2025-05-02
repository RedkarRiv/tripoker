import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';
import Home from '@pages/Home';
import Register from '@pages/Register';
import Rules from '@pages/Rules';
import Ranking from '@pages/Ranking';
import Account from '@pages/Account';
import Room from '@pages/Room';
import Statistics from '@pages/Statistics';
import Navbar from '@components/Navbar';
import ViewportDetector from '@components/ViewportDetector';

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
      <ViewportDetector />
      {/* Pasamos la función para manejar el toggle de la navbar */}
      <Navbar onToggle={handleNavbarToggle} />
      {/* Contenedor de las rutas */}
      <Routes>
        <Route path="/" element={<Home inheritClass={baseClass} />} />
        <Route path="/register" element={<Register inheritClass={baseClass} />} />
        <Route path="/rules" element={<Rules inheritClass={baseClass} />} />
        <Route path="/ranking" element={<Ranking inheritClass={baseClass} />} />
        <Route path="/statistics" element={<Statistics inheritClass={baseClass} />} />
        <Route path="/rooms" element={<Room inheritClass={baseClass} />} />
        <Route path="/account" element={<Account inheritClass={baseClass} />} />
      </Routes>
    </>
  );
};

export default App;