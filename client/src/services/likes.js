import * as api from './api.js';

const endpoint = {
    'create': 'data/likes',
    'getAll': 'data/likes',

};

export const createLikes = async (data, accessToken) => {
    const response = await api.post(endpoint.create, data, accessToken);
    return response;
};

export const getAllLikes = async () => {
    const response = await api.get(endpoint.getAll);
    return response;
};

export const getAllLikesForPost = async (postId) => {
    const encodeUrl = encodeURIComponent(`="${postId}"`);
    const response = await api.get(`${endpoint.getAll}?where=postId${encodeUrl}`);
    return response;
};

