const { fakePosts } = require('./fake.posts.data');

const fakePostsService = {
    getAllPosts: () => Promise.resolve(fakePosts),
    getPostById: () => Promise.resolve(fakePosts[0]),
    createPost: () => Promise.resolve(fakePosts[0]),
    updatePostContent: () => Promise.resolve(fakePosts[1]),
    updatePostTitle: () => Promise.resolve(fakePosts[1]),
    deletePost: () => Promise.resolve(fakePosts[0]),
};

module.exports = { fakePostsService };