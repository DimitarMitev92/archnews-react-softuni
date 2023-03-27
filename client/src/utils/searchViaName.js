export const searcherViaName = (searchName, posts) => {
    const result = posts.filter(post => post.title.includes(searchName));
    return result;
};


