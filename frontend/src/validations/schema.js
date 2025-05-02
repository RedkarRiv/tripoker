import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('El nombre es obligatorio'),
  alias: yup.string().required('El alias es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña'),
});

export const accountSchema = yup.object().shape({
  firstName: yup.string().required('Requerido'),
  alias: yup.string().required('Requerido'),
  currentPassword: yup.string().when('$isChangingPassword', {
    is: true,
    then: (schema) => schema.required('Contraseña actual requerida'),
    otherwise: (schema) => schema.notRequired(),
  }),
  newPassword: yup.string().when('$isChangingPassword', {
    is: true,
    then: (schema) =>
      schema
        .min(6, 'Mínimo 6 caracteres')
        .required('Nueva contraseña requerida'),
    otherwise: (schema) => schema.notRequired(),
  }),
  confirmNewPassword: yup.string().when('$isChangingPassword', {
    is: true,
    then: (schema) =>
      schema
        .required('Confirmación requerida')
        .test('passwords-match', 'Las contraseñas no coinciden', function (value) {
          return value === this.parent.newPassword;
        }),
    otherwise: (schema) => schema.notRequired(),
  }),
});