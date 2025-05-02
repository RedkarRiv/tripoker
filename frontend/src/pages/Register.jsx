import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RegisterForm from '@components/RegisterForm';
import LoginForm from '@components/LoginForm';

const Register = ({ inheritClass }) => {
  const { t } = useTranslation('register')
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className={`${inheritClass} w-full h-screen bg-yellow-100 flex items-center justify-center flex-col  pt-[4rem]`}>
      <h1 className="text-5xl font-bold text-yellow-900 p-3">{showLogin ? t('login') : t('register')}</h1>
         {showLogin ? (
          <div className="flex flex-col justify-center">
            <LoginForm />
            <p className="text-sm text-gray-700 mt-2">
              ¿No estás registrado?{' '}
              <span onClick={toggleForm} className="text-blue-700 cursor-pointer underline">
                Crear cuenta
              </span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <RegisterForm />
            <p className="text-sm text-gray-700 mt-2">
              ¿Ya estás registrado?{' '}
              <span onClick={toggleForm} className="text-blue-700 cursor-pointer underline">
                Login
              </span>
            </p>
          </div>
        )}
    </div>
  );
};

export default Register;