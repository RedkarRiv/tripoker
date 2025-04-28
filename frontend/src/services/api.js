import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // http://backend:3001
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores (opcional, pero recomendado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message;
    return Promise.reject(new Error(message));
  }
);

export default api;