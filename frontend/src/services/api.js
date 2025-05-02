console.log("[api.js] módulo cargado");


import axios from 'axios';
import { getAuthToken } from './authToken.js'; // importar el helper

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); // Obtener el token del helper
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta (se mantiene igual)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
