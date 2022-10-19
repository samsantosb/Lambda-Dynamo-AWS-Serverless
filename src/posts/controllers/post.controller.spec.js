const { mockRequest, mockResponse } = require('./../__mocks__/fake.posts.route');
const { fakePostsService } = require('./../__mocks__/fake.posts.service');
const { fakeIds, fakePosts, postsForValidation } = require('./../__mocks__/fake.posts.data');
const { StatusCode } = require('./../../utils/statusCode/status.code');
const { PostsController } = require('./posts.controller');

const postsController = new PostsController(fakePostsService);

const req = mockRequest();
const res = mockResponse();

describe('PostsController', () => {
    describe('getAllPosts', () => {
        it('should return all posts', async () => {
            req.query.pages = 1;
            await postsController.getAllPosts(req, res);
            expect(res.json).toHaveBeenCalledWith(fakePosts);
        });
        it('should return StatusCode.OK', async () => {
            req.query.pages = 1;
            await postsController.getAllPosts(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it('should return a PromiseError message', async () => {
            req.query.pages = 1;
            jest.spyOn(fakePostsService, 'getAllPosts').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.getAllPosts(req, res);
            expect(res.json).toHaveBeenCalledWith({ promiseError: 'Error' });
        })
        it('should return StatusCode.INTERNAL_SERVER_ERROR', async () => {
            req.query.pages = 1;
            jest.spyOn(fakePostsService, 'getAllPosts').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.getAllPosts(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it('should call postsService.getAllPosts', async () => {
            const spy = jest.spyOn(fakePostsService, 'getAllPosts');
            req.query.pages = 1;
            await postsController.getAllPosts(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });
    //do the same above to all other controller methods
    describe('getPostById', () => {
        it('should return a post', async () => {
            req.params.id = fakeIds[0];
            await postsController.getPostById(req, res);
            expect(res.json).toHaveBeenCalledWith(fakePosts[0]);
        });
        it('should return StatusCode.OK', async () => {
            req.params.id = fakeIds[0];
            await postsController.getPostById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it('should return a promiseError message', async () => {
            req.params.id = fakeIds[0];
            jest.spyOn(fakePostsService, 'getPostById').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.getPostById(req, res);
            expect(res.json).toHaveBeenCalledWith({ promiseError: 'Error' });
        })
        it('should return StatusCode.INTERNAL_SERVER_ERROR', async () => {
            req.params.id = fakeIds[0];
            jest.spyOn(fakePostsService, 'getPostById').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.getPostById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it('should call postsService.getPostById', async () => {
            const spy = jest.spyOn(fakePostsService, 'getPostById');
            req.params.id = fakeIds[0];
            await postsController.getPostById(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('createPost', () => {
        it('should create a post', async () => {
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            await postsController.createPost(req, res);
            expect(res.json).toHaveBeenCalledWith(fakePosts[0]);
        });
        it('should return StatusCode.CREATED', async () => {
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            await postsController.createPost(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
        });
        it('should return a promiseError message', async () => {
            req.apiGateway.event.body = postsForValidation.postThatIsInvalid;
            jest.spyOn(fakePostsService, 'createPost').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.createPost(req, res);
            expect(res.json).toHaveBeenCalledWith({ promiseError: 'Error' });
        })
        it('should return StatusCode.INTERNAL_SERVER_ERROR', async () => {
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            jest.spyOn(fakePostsService, 'createPost').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.createPost(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it('should call postsService.createPost', async () => {
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            const spy = jest.spyOn(fakePostsService, 'createPost');
            await postsController.createPost(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updatePostContent', () => {
        it('should update a post content', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            await postsController.updatePostContent(req, res);
            expect(res.json).toHaveBeenCalledWith(fakePosts[1]);
        });
        it('should return StatusCode.OK', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            await postsController.updatePostContent(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it('should return a promiseError message', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            jest.spyOn(fakePostsService, 'updatePostContent').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.updatePostContent(req, res);
            expect(res.json).toHaveBeenCalledWith({ promiseError: 'Error' });
        });
        it('should return StatusCode.INTERNAL_SERVER_ERROR', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            jest.spyOn(fakePostsService, 'updatePostContent').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.updatePostContent(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it('should call postsService.updatePostContent', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            const spy = jest.spyOn(fakePostsService, 'updatePostContent');
            await postsController.updatePostContent(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updatePostTitle', () => {
        it('should update a post title', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            await postsController.updatePostTitle(req, res);
            expect(res.json).toHaveBeenCalledWith(fakePosts[1]);
        });
        it('should return StatusCode.OK', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            await postsController.updatePostTitle(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it('should return a promiseError Message', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            jest.spyOn(fakePostsService, 'updatePostTitle').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.updatePostTitle(req, res);
            expect(res.json).toHaveBeenCalledWith({ promiseError: 'Error' });
        })
        it('should return StatusCode.INTERNAL_SERVER_ERROR', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            jest.spyOn(fakePostsService, 'updatePostTitle').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.updatePostTitle(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it('should call postsService.updatePostTitle', async () => {
            req.params.id = fakeIds[0];
            req.apiGateway.event.body = postsForValidation.postThatIsValid;
            const spy = jest.spyOn(fakePostsService, 'updatePostTitle');
            await postsController.updatePostTitle(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('deletePost', () => {
        it('should delete a post', async () => {
            req.params.id = fakeIds[0];
            await postsController.deletePost(req, res);
            expect(res.json).toHaveBeenCalledWith(fakePosts[0]);
        });
        it('should return StatusCode.OK', async () => {
            req.params.id = fakeIds[0];
            await postsController.deletePost(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it('should return a promiseError Message', async () => {
            req.params.id = fakeIds[0];
            jest.spyOn(fakePostsService, 'deletePost').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.deletePost(req, res);
            expect(res.json).toHaveBeenCalledWith({ promiseError: 'Error' });
        })
        it('should return StatusCode.INTERNAL_SERVER_ERROR', async () => {
            req.params.id = fakeIds[0];
            jest.spyOn(fakePostsService, 'deletePost').mockImplementation(() => Promise.resolve({ promiseError: 'Error' }));
            await postsController.deletePost(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it('should call postsService.deletePost', async () => {
            req.params.id = fakeIds[0];
            const spy = jest.spyOn(fakePostsService, 'deletePost');
            await postsController.deletePost(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });
});