import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { io } from 'socket.io-client';

const API_URL = import.meta.env.VITE_API_URL;
const socket  = io(API_URL);

socket.on('connect', () => {
  console.log('Connected to server');
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
