const { UpdatePostDto } = require('./../dtos/update.post.dto');
const { CreatePostDto } = require('./../dtos/create.post.dto');
const { invalidPost } = require('./../utils/posts.body.validator');
const { isJson } = require('./../../utils/jsonValidator/json.validator');
const { StatusCode } = require('./../../utils/statusCode/status.code');

class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
}

module.exports = { PostsController };