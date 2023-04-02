const filterMethod = (likes, ownerId) => {
    if (likes.length != 0) {
        likeId = likes.filter((like) => like._ownerId === ownerId)[0]._id;
    }
    console.log(likeId);
};

const likes = [
    {
        "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
        "likedUser": "847ec027-f659-4086-8032-5173e2f9c93a",
        "postId": "d20629a8-8070-4e10-87b0-fec0b798a6c6",
        "_createdOn": 1680435755103,
        "_id": "b0a20366-3f5e-4086-bc86-cdcdb46b3138"
    },
    {
        "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
        "likedUser": "847ec027-f659-4086-8032-5173e2f9c93a",
        "postId": "d20629a8-8070-4e10-87b0-fec0b798a6c6",
        "_createdOn": 1680435757538,
        "_id": "07d8a4de-0518-4e07-b23e-1baee56a081a"
    },
    {
        "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93",
        "likedUser": "847ec027-f659-4086-8032-5173e2f9c93a",
        "postId": "d20629a8-8070-4e10-87b0-fec0b798a6c6",
        "_createdOn": 1680435861998,
        "_id": "f1e4a83a-ba29-48b9-a366-c8a33f7a312f"
    }
];
const ownerId = "847ec027-f659-4086-8032-5173e2f9c93";

filterMethod(likes, ownerId);