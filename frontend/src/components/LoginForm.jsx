// src/components/LoginForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { loginUser } from '../services/authService.js';

function LoginForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const { email, password } = formData;

    try {
      const data = await loginUser({ email, password });
      dispatch(setCredentials({ token: data.token, user: data.user }));
      alert('Login correcto');
      //REDIRIGIR
    } catch (error) {
      console.error(error);
      //SETEAR ERROR
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <h1>LOGIN</h1>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <button
        type="button"
        disabled={loading}
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 hover:bg-green-600"
      >
        {loading ? 'Entrando...' : 'Iniciar Sesión'}
      </button>
    </div>
  );
}

export default LoginForm;
