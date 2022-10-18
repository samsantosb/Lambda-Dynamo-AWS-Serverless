const { fakeIds, fakePosts } = require('../__mocks__/fake.posts.data');
const { fakePostsRepository } = require('../__mocks__/fake.posts.repository');
const { PostsService } = require('../services/posts.service');
const { describe, it, expect } = global;

const postsService = new PostsService(fakePostsRepository);

describe('PostsService', () => {
    describe('getAllPosts', () => {
        it('should return all posts', async () => {
            const result = await postsService.getAllPosts();
            expect(result).toEqual(fakePosts);
        });
        it('should call the postsRepository.getAllPosts method', async () => {
            const spy = jest.spyOn(fakePostsRepository, 'getAllPosts');
            await postsService.getAllPosts();
            expect(spy).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakePostsRepository, "getAllPosts").mockRejectedValueOnce("Error");
            const post = await postsService.getAllPosts(fakeIds[0]);
            expect(post).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe('getPostById', () => {
        it('should return a post by id', async () => {
            const result = await postsService.getPostById(fakeIds[0]);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should call the postsRepository.getPostById method', async () => {
            const spy = jest.spyOn(fakePostsRepository, 'getPostById');
            await postsService.getPostById(fakeIds[0]);
            expect(spy).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakePostsRepository, "getPostById").mockRejectedValueOnce("Error");
            const post = await postsService.getPostById(fakeIds[0]);
            expect(post).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe('createPost', () => {
        it('should create a post', async () => {
            const result = await postsService.createPost(fakePosts[0]);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should call the postsRepository.createPost method', async () => {
            const spy = jest.spyOn(fakePostsRepository, 'createPost');
            await postsService.createPost(fakePosts[0]);
            expect(spy).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakePostsRepository, "createPost").mockRejectedValueOnce("Error");
            const post = await postsService.createPost(fakePosts[0]);
            expect(post).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe('updatePostContent', () => {
        it('should update a post content', async () => {
            const result = await postsService.updatePostContent(fakeIds[0], fakePosts[0]);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should call the postsRepository.updatePostContent method', async () => {
            const spy = jest.spyOn(fakePostsRepository, 'updatePostContent');
            await postsService.updatePostContent(fakeIds[0], fakePosts[0]);
            expect(spy).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakePostsRepository, "updatePostContent").mockRejectedValueOnce("Error");
            const post = await postsService.updatePostContent(fakeIds[0], fakePosts[0]);
            expect(post).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe('updatePostTitle', () => {
        it('should update a post title', async () => {
            const result = await postsService.updatePostTitle(fakeIds[0], fakePosts[0]);
            expect(result).toEqual(fakePosts[1]);
        });
        it('should call the postsRepository.updatePostTitle method', async () => {
            const spy = jest.spyOn(fakePostsRepository, 'updatePostTitle');
            await postsService.updatePostTitle(fakeIds[0], fakePosts[0]);
            expect(spy).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakePostsRepository, "updatePostTitle").mockRejectedValueOnce("Error");
            const post = await postsService.updatePostTitle(fakeIds[0], fakePosts[0]);
            expect(post).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe('deletePost', () => {
        it('should delete a post', async () => {
            const result = await postsService.deletePost(fakeIds[0]);
            expect(result).toEqual(fakePosts[0]);
        });
        it('should call the postsRepository.deletePost method', async () => {
            const spy = jest.spyOn(fakePostsRepository, 'deletePost');
            await postsService.deletePost(fakeIds[0]);
            expect(spy).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakePostsRepository, "deletePost").mockRejectedValueOnce("Error");
            const post = await postsService.deletePost(fakeIds[0]);
            expect(post).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });
});
