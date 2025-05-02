export const registerSchema = (data) => {
    switch (true) {
      case !data.email || !/\S+@\S+\.\S+/.test(data.email):
        return 'Email inválido';
      case !data.password || data.password.length < 6:
        return 'La contraseña debe tener al menos 6 caracteres';
      case !/[A-Z]/.test(data.password):
        return 'La contraseña debe contener al menos una letra mayúscula';
      case data.password !== data.confirmPassword:
        return 'Las contraseñas no coinciden';
      case !data.firstName || data.firstName.trim() === '':
        return 'El primer nombre es obligatorio';
      case !data.alias || data.alias.trim() === '':
        return 'El alias es obligatorio';
      default:
        return null;  
    }
  };
  
  export const loginSchema = (data) => {
    switch (true) {
      case !data.email || !/\S+@\S+\.\S+/.test(data.email):
        return 'Email inválido';
      case !data.password || data.password.trim() === '':
        return 'La contraseña es obligatoria';
      default:
        return null; 
    }
  };