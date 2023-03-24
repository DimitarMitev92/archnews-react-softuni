export const addLikesToCurrentPost = (posts, likes) => {
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

const posts = [
    {
        "_ownerId": "26620c28-c973-4d0f-9221-e35b8a20146d",
        "title": "qweqweqwe",
        "location": "qweqweqwewqe",
        "imageUrl": "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "post": "qweqweqwe qweqweqweqwe qweqweqweqwe",
        "_createdOn": 1679662674804,
        "_id": "c8dfb493-e999-45c4-a726-ca8d288e681e"
    },
    {
        "_ownerId": "26620c28-c973-4d0f-9221-e35b8a20146d",
        "title": "wwwwwwwwww",
        "location": "wwwwwwwwwwwww",
        "imageUrl": "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        "post": "wwwwwwwww wwwwwwwwwwww wwwwwwwwwww",
        "_createdOn": 1679662683061,
        "_id": "67b1e3ec-881e-4b88-8e8c-f24416783a85"
    },
    {
        "_ownerId": "26620c28-c973-4d0f-9221-e35b8a20146d",
        "title": "eeeeeeeee",
        "location": "eeeeeeeeeeeeeeeee",
        "imageUrl": "https://images.unsplash.com/photo-1506749841726-3df2e72b9564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
        "post": "eeeeeeeeee eeeeeeeeeeeee eeeeeeeeeeee",
        "_createdOn": 1679662691059,
        "_id": "a9d11d9c-8529-4938-8b8b-23df1b758363"
    }
];

console.log(addLikesToCurrentPost(posts, likes));