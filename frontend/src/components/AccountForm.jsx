import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserProfile, updateUserProfile } from '@services/userService.js';
import { toast } from 'react-toastify';
import _get from 'lodash/get';
import { accountSchema } from '@validations/schema.js';

const PencilIcon = ({ className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
    />
  </svg>
);

const EyeIcon = ({ className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeOffIcon = ({ className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.665-3.023m3.213-2.652A9.965 9.965 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.96 9.96 0 01-1.338 2.581M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 3l18 18" />
  </svg>
);

const AccountForm = () => {
  const { t } = useTranslation('accountForm');

  const [user, setUser] = useState({
    firstName: '',
    alias: '',
    email: '',
    token_amount: 0,
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [editingField, setEditingField] = useState(null); // 'firstName' | 'alias' | null
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const profileData = await getUserProfile();
        setUser(profileData);
      } catch (err) {
        console.error(err);
        toast.error('Error al cargar el perfil');
      }
    })();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((u) => ({ ...u, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const toggleEdit = (field) => {
    setEditingField((prev) => (prev === field ? null : field));
  };

  const toggleShow = (field) => {
    setShowPassword((s) => ({ ...s, [field]: !s[field] }));
  };

  const handleBlur = async (field) => {
    try {
      await accountSchema.validateAt(field, user, {
        context: { isChangingPassword },
      });
      setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    } catch (validationError) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: validationError.message }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Estado completo antes de validar:", user);
      console.log("newPassword:", user.newPassword);
      console.log("confirmNewPassword:", user.confirmNewPassword);
      console.log('isChangingPassword:', isChangingPassword);
      console.log("Son iguales:", user.newPassword === user.confirmNewPassword);
      await accountSchema.validate(user, {
        context: { isChangingPassword },
        abortEarly: false, 
      });

      const data = {
        firstName: user.firstName,
        alias: user.alias,
        password: isChangingPassword ? user.newPassword : undefined,
        currentPassword: isChangingPassword ? user.currentPassword : undefined,
      };
      console.log('Datos enviados al backend:', data);
      const res = await updateUserProfile(data);
      toast.success(res.msg);
      setEditingField(null);
      setIsChangingPassword(false);
    } catch (validationError) {
      const newErrors = {};
      validationError.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors); 
    }
  };

  const renderInput = (field, label, type = 'text') => {
    const isEditable = editingField === field || type === 'password';
    const error = errors[field];

    return (
      <div className="w-full lg:w-6/12 px-4 mb-4">
        <label htmlFor={field} className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          {label}
        </label>
        <div className="relative">
          <input
            id={field}
            name={field}
            type={type === 'password' && showPassword[field] ? 'text' : type}
            className={`w-full border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
              rounded text-sm shadow focus:outline-none focus:ring pr-10
              ${isEditable ? 'bg-black' : 'bg-tertiaryColorHover'}
              ${error ? 'border-red-500' : 'border-0'}`}
            value={_get(user, field, '')}
            readOnly={!isEditable}
            onChange={handleInputChange}
            onBlur={() => handleBlur(field)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
            {type === 'password' ? (
              <button type="button" onClick={() => toggleShow(field)} className="p-1">
                {showPassword[field]
                  ? <EyeOffIcon className="h-5 w-5 text-gray-500" />
                  : <EyeIcon className="h-5 w-5 text-gray-500" />}
              </button>
            ) : (
              <button type="button" onClick={() => toggleEdit(field)} className="p-1">
                <PencilIcon className="h-5 w-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
    );
  };

  return (
    <section className="bg-blueGray-50 py-8">
      <div className="max-w-4xl mx-auto bg-tertiaryColor text-white rounded-xl p-6">
        <form onSubmit={handleSubmit}>
          <h6 className="text-blueGray-400 text-sm mb-6 font-bold uppercase">
            Información de usuario
          </h6>

          <div className="flex flex-wrap -mx-4">
            {renderInput('firstName', 'Nombre')}
            {renderInput('alias', 'Alias')}
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring"
                value={user.email}
                readOnly
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <label htmlFor="token_amount" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Tokens
              </label>
              <input
                id="token_amount"
                name="token_amount"
                type="text"
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring"
                value={user.token_amount ?? ''}
                readOnly
              />
            </div>
          </div>

          <div className="mb-6">
            <button
              type="button"
              className="text-blue-200 hover:text-white text-sm"
              onClick={() => setIsChangingPassword((p) => !p)}
            >
              {isChangingPassword ? 'Cancelar cambio de contraseña' : 'Cambiar contraseña'}
            </button>
          </div>

          {isChangingPassword && (
            <>
              <h6 className="text-blueGray-400 text-sm mb-4 font-bold uppercase">
                Actualizar contraseña
              </h6>
              <div className="flex flex-wrap -mx-4 mb-6">
                {renderInput('currentPassword', 'Contraseña actual', 'password')}
                {renderInput('newPassword', 'Nueva contraseña', 'password')}
                {renderInput('confirmNewPassword', 'Confirmar nueva', 'password')}
              </div>
            </>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountForm;
