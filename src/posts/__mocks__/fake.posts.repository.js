const { fakePosts, fakeIds } = require('./fake.posts.data');

const fakePostsRepository = {
    getAllPosts: jest.fn().mockResolvedValue(fakePosts),
    getPostById: jest.fn().mockResolvedValue(fakePosts[0]),
    createPost: jest.fn().mockResolvedValue(fakePosts[0]),
    updatePostContent: jest.fn().mockResolvedValue(fakePosts[0]),
    updatePostTitle: jest.fn().mockResolvedValue(fakePosts[1]),
    deletePost: jest.fn().mockResolvedValue(fakePosts[0]),
};

module.exports = { fakePostsRepository };