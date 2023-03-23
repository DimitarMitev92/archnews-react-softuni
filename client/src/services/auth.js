import * as api from './api.js';

const endpoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
};

export const register = async (name, username, email, password) => {
    const data = {
        name,
        username,
        email,
        password
    };
    const response = await api.post(endpoint.register, data);
    return response;
};

export const login = async (email, password) => {
    const data = {
        email,
        password
    };
    const response = await api.post(endpoint.login, data);
    return response;
};

export const logout = async (accessToken) => {
    api.get(endpoint.logout, null, accessToken);
};