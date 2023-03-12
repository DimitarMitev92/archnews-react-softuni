const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (title, location, imageUrl, post, date, likes, ownerId) => {
    const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            location: location,
            imageUrl: imageUrl,
            post: post,
            date: date,
            likes: likes,
            ownerId: ownerId
        })
    });

    const result = await response.json();
    return result;
};