const { PostsRepository } = require('../repositories/posts.repository');
const { PostsService } = require('../services/posts.service');
const { PostsController } = require('../controllers/posts.controller');
const AWS = require("aws-sdk");
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

function postsFactory() {
    const postsRepository = new PostsRepository(dynamoDbClient);
    const postsService = new PostsService(postsRepository);
    const postsController = new PostsController(postsService);

    return postsController
}

const posts = postsFactory();

module.exports = { posts };