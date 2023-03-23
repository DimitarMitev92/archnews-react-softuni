import * as api from './api.js';

const endpoint = {
    'create': 'data/posts',
    'all': 'data/posts',
    'byId': 'data/posts/',
    'update': 'data/posts/',
    'delete': 'data/posts/'
};

export const createPost = async (accessToken, postData) => {
    const response = await api.post(endpoint.create, postData, accessToken);
    return response;
};

export const getAllPosts = async () => {
    const response = await api.get(endpoint.all);
    return response;
};

export const getPostById = async (postId) => {
    const response = await api.get(endpoint.byId + postId);
    return response;
};

export const updatePost = async (postId, postData, accessToken) => {
    const response = await api.put(endpoint.update + postId, postData, accessToken);
    return response;
};

export const deletePost = async (postId, accessToken) => {
    const response = await api.del(endpoint.delete + postId, null, accessToken);
    return response;
};
