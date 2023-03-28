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


