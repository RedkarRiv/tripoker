/* import * as yup from 'yup';

export const registerSchema = yup.object({
    email:    yup.string().email('Email inválido').required('Obligatorio'),
    password: yup.string()
      .min(6, 'Mínimo 6 caracteres')
      .matches(/(?=.*[A-Z])/, 'Debe tener una mayúscula')
      .required('Obligatorio'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Obligatorio'),
    firstName: yup.string().required('Obligatorio'),
    lastName:  yup.string().required('Obligatorio'),
  });

export const loginSchema = yup.object({
email: yup.string()
    .email('Email inválido')
    .required('Obligatorio'),
password: yup.string()
    .required('Obligatorio')
});
   */

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
        return null;  // No hay errores
    }
  };
  
  // Validación para el login
  export const loginSchema = (data) => {
    switch (true) {
      case !data.email || !/\S+@\S+\.\S+/.test(data.email):
        return 'Email inválido';
      case !data.password || data.password.trim() === '':
        return 'La contraseña es obligatoria';
      default:
        return null;  // No hay errores
    }
  };