const { PostsRepository } = require('./posts.repository');
const { fakeDynamoDb } = require('./../__mocks__/fake.dynamo');
const { fakePosts } = require('./../__mocks__/fake.posts.data');
const { describe, it, expect } = global;

const postsRepository = new PostsRepository(fakeDynamoDb);

describe('PostsRepository', () => {
    describe('getAllPosts', () => {
        it('should return all posts', async () => {
            const result = await postsRepository.getAllPosts();
            expect(result).toEqual(fakePosts);
        });
        it('should return empty array if query is null or undefined', async () => {
            fakeDynamoDb.scan.mockImplementationOnce(() => ({
                promise: jest.fn().mockResolvedValue({
                    Item: null,
                }),
            }));
            const result = await postsRepository.getAllPosts();
            expect(result).toEqual([]);
        });
        it('should call the dynamoDb.scan method', async () => {
            const spy = jest.spyOn(fakeDynamoDb, 'scan');
            await postsRepository.getAllPosts();
            expect(spy).toHaveBeenCalled();
        })
    });

    describe('getPostById', () => {
        it('should return a post by id', async () => {
            const result = await postsRepository.getPostById(fakePosts[0].id);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should return empty object if query is null or undefined', async () => {
            fakeDynamoDb.get.mockImplementationOnce(() => ({
                promise: jest.fn().mockResolvedValue({
                    Item: null,
                }),
            }));
            const result = await postsRepository.getPostById(fakePosts[0].id);
            expect(result).toEqual({});
        });
        it('should call the dynamoDb.get method', async () => {
            const spy = jest.spyOn(fakeDynamoDb, 'get');
            await postsRepository.getPostById(fakePosts[0].id);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('createPost', () => {
        it('should create a post', async () => {
            const result = await postsRepository.createPost(fakePosts[0]);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should return empty object if quyery is null or undefined', async () => {
            fakeDynamoDb.put.mockImplementationOnce(() => ({
                promise: jest.fn().mockResolvedValue({
                    Item: null,
                }),
            }));
            const result = await postsRepository.createPost(fakePosts[0]);
            expect(result).toEqual({});
        });
        it('should call the dynamoDb.put method', async () => {
            const spy = jest.spyOn(fakeDynamoDb, 'put');
            await postsRepository.createPost(fakePosts[0]);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updatePostContent', () => {
        it('should update a post content', async () => {
            const post = fakePosts[1];
            const result = await postsRepository.updatePostContent(fakePosts[0].id, post);
            expect(result).toEqual(post);
        });
        it('should return empty object if query is null or undefined', async () => {
            fakeDynamoDb.update.mockImplementationOnce(() => ({
                promise: jest.fn().mockResolvedValue({
                    Attributes: null,
                }),
            }));
            const result = await postsRepository.updatePostContent(fakePosts[0].id, fakePosts[1]);
            expect(result).toEqual({});
        });
        it('should call the dynamoDb.update method', async () => {
            const spy = jest.spyOn(fakeDynamoDb, 'update');
            await postsRepository.updatePostContent(fakePosts[0].id, fakePosts[1]);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updatePostStatus', () => {
        it('should update a post status', async () => {
            const post = true
            const result = await postsRepository.updatePostStatus(fakePosts[0].id, post);
            expect(result).toEqual(fakePosts[1]);
        });
        it('should return empty object if query is null or undefined', async () => {
            fakeDynamoDb.update.mockImplementationOnce(() => ({
                promise: jest.fn().mockResolvedValue({
                    Attributes: null,
                }),
            }));
            const result = await postsRepository.updatePostStatus(fakePosts[0].id, true);
            expect(result).toEqual({});
        });
        it('should call the dynamoDb.update method', async () => {
            const spy = jest.spyOn(fakeDynamoDb, 'update');
            await postsRepository.updatePostStatus(fakePosts[0].id, true);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('deletePost', () => {
        it('should delete a post', async () => {
            const result = await postsRepository.deletePost(fakePosts[0].id);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should return empty object, if query is null or undefined', async () => {
            fakeDynamoDb.delete.mockImplementationOnce(() => ({
                promise: jest.fn().mockResolvedValue({
                    Attributes: null,
                }),
            }));
            const result = await postsRepository.deletePost(fakePosts[0].id);
            expect(result).toEqual({});
        });
        it('should call the dynamoDb.delete method', async () => {
            const spy = jest.spyOn(fakeDynamoDb, 'delete');
            await postsRepository.deletePost(fakePosts[0].id);
            expect(spy).toHaveBeenCalled();
        });
    });
});