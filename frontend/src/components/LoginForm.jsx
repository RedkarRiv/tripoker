import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { loginUser } from '../services/authService.js';
import { loginSchema } from '../validations/schema.js';
import { useFormValidation } from '../hooks/useFormValidations.js';

function LoginForm() {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateAll,
  } = useFormValidation(
    { email: '', password: '' },
    loginSchema
  );

  const handleSubmit = async () => {
    const isValid = await validateAll();
    if (!isValid) return;

    try {
      const data = await loginUser(values);
      dispatch(setCredentials({ token: data.token, user: data.user }));
      // REDIRIGIR
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <h1>LOGIN</h1>

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

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 hover:bg-green-600"
      >
        Iniciar Sesión
      </button>
    </div>
  );
}

export default LoginForm;
