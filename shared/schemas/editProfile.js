export const editProfileSchema = (data) => {
  switch (true) {
    case data.alias && data.alias.trim() === '':
      return 'El alias no puede estar vacío';
    case data.password && data.password.length < 6:
      return 'La contraseña debe tener al menos 6 caracteres';
    case data.password && !/[A-Z]/.test(data.password):
      return 'La contraseña debe contener al menos una letra mayúscula';
    default:
      return null;
  }
};