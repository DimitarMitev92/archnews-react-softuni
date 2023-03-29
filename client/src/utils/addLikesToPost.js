export const addLikesToCurrentPost = (posts, likes) => {
    if (likes.code === 404) {
        likes = [];
    }
    if (posts.code === 404) {
        posts = [];
    }
    const result = posts.map((post) => {
        return {
            ...post,
            likes: likes.filter(like => like.postId === post._id).length
        };

    });
    return result;
};


