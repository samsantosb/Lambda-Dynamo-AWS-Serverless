const { fakeIds, fakePosts } = require('../__mocks__/fake.posts.data');
const { fakePostsRepository } = require('../__mocks__/fake.posts.repository');
const { PostsService } = require('../services/posts.service');
const { describe, it, expect } = global;

const postsService = new PostsService(fakePostsRepository);
