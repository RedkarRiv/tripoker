import api from './api.js';

// Obtener el perfil de usuario
export async function getUserProfile() {
  const response = await api.get('/user/me');
  return response.data;
}

// Actualizar el perfil de usuario (alias o contraseña)
export async function updateUserProfile(data) {
  const response = await api.put('/user/profile', data);
  return response.data;
}