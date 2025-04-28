import api from './api';

export async function registerUser({ email, password, confirmPassword, firstName, lastName }) {
    const response = await api.post('/auth/register', {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
    });

    return response.data;
}