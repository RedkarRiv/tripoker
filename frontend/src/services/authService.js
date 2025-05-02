import api from './api';

export async function registerUser({ email, password, confirmPassword, firstName, alias }) {
    const response = await api.post('/auth/register', {
        email,
        password,
        confirmPassword,
        firstName,
        alias,
    });

    return response.data;
}

export async function loginUser({ email, password }) {
    const response = await api.post('/auth/login', {
        email,
        password,
    });
    return response.data;
}