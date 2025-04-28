import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { registerUser } from '../services/authService.js';
import { registerSchema } from '../validations/schema.js';
import { useFormValidation } from '../hooks/useFormValidations.js';

function RegisterForm() {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateAll,
  } = useFormValidation(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    registerSchema
  );

  const handleSubmit = async () => {
    const isValid = await validateAll();
    if (!isValid) return;

    try {
      const data = await registerUser(values);
      dispatch(setCredentials({ token: data.token, user: data.user }));
      // REDIRIGIR
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <h1>REGISTRO</h1>

      {/* Nombre */}
      <div className="flex flex-col">
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border p-2"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      {/* Apellidos */}
      <div className="flex flex-col">
        <input
          type="text"
          name="lastName"
          placeholder="Apellidos"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border p-2"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border p-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Contraseña */}
      <div className="flex flex-col">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border p-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      {/* Confirmar contraseña */}
      <div className="flex flex-col">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border p-2"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 hover:bg-blue-600"
      >
        Registrarse
      </button>
    </div>
  );
}

export default RegisterForm;
