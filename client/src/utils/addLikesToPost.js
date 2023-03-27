export const addLikesToCurrentPost = (posts, likes) => {
    if (likes.code === 404) {
        likes = [];
    }
    const result = posts.map((post) => {
        return {
            ...post,
            likes: likes.filter(like => like.postId === post._id).length
        };

    });
    return result;
};


const likes = [
    {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "likedUser": "35c62d76-8152-4626-8712-eeb96381bea8",
        "postId": "c8dfb493-e999-45c4-a726-ca8d288e681e",
        "_createdOn": 1679662702256,
        "_id": "4c8df709-935d-426b-8f94-31248c4c8599"
    },
    {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "likedUser": "35c62d76-8152-4626-8712-eeb96381bea8",
        "postId": "67b1e3ec-881e-4b88-8e8c-f24416783a85",
        "_createdOn": 1679662705992,
        "_id": "9f86faa1-59c1-41a4-b295-6850effe9a02"
    },
    {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "likedUser": "35c62d76-8152-4626-8712-eeb96381bea8",
        "postId": "a9d11d9c-8529-4938-8b8b-23df1b758363",
        "_createdOn": 1679662708894,
        "_id": "e07bbcd7-518a-48b8-9192-c4c1d584215f"
    }
];
