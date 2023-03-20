const baseUrl = 'http://localhost:3030/data';

export const createPost = async (accessToken, postData) => {
    const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": accessToken
        },
        body: JSON.stringify(postData)
    });
    return response.json();
};

export const getAllPosts = async () => {
    const response = await fetch(`${baseUrl}/posts`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
};