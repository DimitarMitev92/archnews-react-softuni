import * as api from './api.js';

const endpoint = {
    'create': 'data/comments',
    'getAll': 'data/comments',
    'delete': 'data/comments/'
};

export const createComments = async (data, accessToken) => {
    const response = await api.post(endpoint.create, data, accessToken);
    return response;
};

export const getAllComments = async () => {
    const response = await api.get(endpoint.getAll);
    return response;
};

export const getAllCommentsForPost = async (postId) => {
    const encodeUrl = encodeURIComponent(`="${postId}"`);
    const response = await api.get(`${endpoint.getAll}?where=postId${encodeUrl}`);
    return response;
};

export const deleteComment = async (commentId, accessToken) => {
    const response = await api.del(endpoint.delete + commentId, null, accessToken);
    return response;
}

