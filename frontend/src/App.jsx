import { useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom' 
import './i18n';
import Home from './pages/Home'  
import Contact from './pages/Contact'
import Party from './pages/Party'
import Navbar from './components/Navbar'
import i18n from './i18n';

const App = () => {


  return (
    <>
    <Navbar/>     
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />  
        <Route path="/party" element={<Party />} />  
      </Routes>
    </>
  )
}

export default App