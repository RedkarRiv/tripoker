import React, {  useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _get from 'lodash/get';
import AccountForm from '@components/AccountForm';

const Account = ({ inheritClass }) => {
  const { t } = useTranslation('account');
  const isMobile = useSelector((state) => _get(state, "viewport.isMobile"));
  const isAuthenticated = useSelector((state) => _get(state, "auth.isAuthenticated"));
  const navigate = useNavigate();

  useEffect(() => {
    !isAuthenticated && navigate('/');;
  }, []);

  return (
    <div className={`${inheritClass} w-full h-fit min-h-screen bg-secondaryColor flex items-center justify-center flex-col`}>
      {!isMobile && <h1 className="md:text-5xl font-bold text-white md:p-3 w-full text-center">Área de usuario</h1>}
      <div className="w-full h-full md:mt-2">
        <AccountForm/>  
      </div>
    </div>
  );
};

export default Account;
