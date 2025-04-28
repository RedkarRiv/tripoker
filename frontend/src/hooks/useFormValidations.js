import { useState } from 'react';

export function useFormValidation(initialValues, validationSchema) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // limpiar error al escribir
  };

  const handleBlur = async (e) => {
    const { name, value } = e.target;

    try {
      await validationSchema.validateAt(name, { ...values, [name]: value });
      setErrors(prev => ({ ...prev, [name]: '' }));
    } catch (err) {
      setErrors(prev => ({ ...prev, [name]: err.message }));
    }
  };

  const validateAll = async () => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const fieldErrors = {};
      err.inner.forEach(error => {
        fieldErrors[error.path] = error.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    validateAll,
    setValues,
    setErrors,
  };
}
