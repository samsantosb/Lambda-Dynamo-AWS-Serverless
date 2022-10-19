const { isPostValid } = require('./../utils/posts.body.validator');
const { isJson, jsonParser } = require('./../../utils/jsonValidator/json.validator');
const { invalidBodyError } = require('./../../utils/errorMessages/error.messages');
const { StatusCode } = require('./../../utils/statusCode/status.code');

class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }

    async getAllPosts(req, res) {
        const pages = req.query.pages;
        const posts = await this.postsService.getAllPosts(pages);

        if ("promiseError" in posts) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(posts);
        }
        return res.status(StatusCode.OK).json(posts);
    }

    async getPostById(req, res) {
        const id = req.params.id;
        const post = await this.postsService.getPostById(id);

        if ("promiseError" in post) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(post);
        }
        return res.status(StatusCode.OK).json(post);
    }

    async createPost(req, res) {
        const rawPost = req.apiGateway.event.body;

        const isPostJson = isJson(rawPost);
        const parsedPost = isPostJson ? jsonParser(rawPost) : rawPost;

        if (!isPostValid(rawPost)) {
            return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(rawPost));
        }

        const createdPost = await this.postsService.createPost(parsedPost);

        if ("promiseError" in createdPost) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(createdPost);
        }

        return res.status(StatusCode.CREATED).json(createdPost);
    }

    async updatePostContent(req, res) {
        const id = req.params.id;
        const rawPost = req.apiGateway.event.body;

        const isPostJson = isJson(rawPost);
        const parsedPost = isPostJson ? jsonParser(rawPost) : rawPost;

        if (!isPostValid(rawPost)) {
            return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(rawPost));
        }

        const updatedPost = await this.postsService.updatePostContent(id, parsedPost);

        if ("promiseError" in updatedPost) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(updatedPost);
        }
        return res.status(StatusCode.OK).json(updatedPost);
    }

    async updatePostTitle(req, res) {
        const id = req.params.id;
        const rawPost = req.apiGateway.event.body;

        const isPostJson = isJson(rawPost);
        const parsedPost = isPostJson ? jsonParser(rawPost) : rawPost;

        if (!isPostValid(rawPost)) {
            return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(rawPost));
        }

        const updatedPost = await this.postsService.updatePostTitle(id, parsedPost);

        if ("promiseError" in updatedPost) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(updatedPost);
        }
        return res.status(StatusCode.OK).json(updatedPost);
    }

    async deletePost(req, res) {
        const id = req.params.id;
        const deletedPost = await this.postsService.deletePost(id);

        if ("promiseError" in deletedPost) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(deletedPost);
        }

        return res.status(StatusCode.OK).json(deletedPost);
    }
}

module.exports = { PostsController };





