const { fakePosts } = require('./fake.posts.data');

const fakeDynamoDb = {
    scan: jest.fn().mockImplementation(() => ({
        promise: jest.fn().mockResolvedValue({
            Item: fakePosts,
        }),
    })),
    get: jest.fn().mockImplementation(() => ({
        promise: jest.fn().mockResolvedValue({
            Item: fakePosts[0],
        }),
    })),
    put: jest.fn().mockImplementation(() => ({
        promise: jest.fn().mockResolvedValue({
            Item: fakePosts[0],
        }),
    })),
    update: jest.fn().mockImplementation(() => ({
        promise: jest.fn().mockResolvedValue({
            Attributes: fakePosts[1],
        }),
    })),
    delete: jest.fn().mockImplementation(() => ({
        promise: jest.fn().mockResolvedValue({
            Item: fakePosts[0],
        }),
    })),
}

module.exports = { fakeDynamoDb };