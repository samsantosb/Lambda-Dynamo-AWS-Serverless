const { PostsRepository } = require('../repositories/posts.repository');
const { PostsService } = require('../services/posts.service');
const { PostsController } = require('../controllers/posts.controller');

function postsFactory() {
    const postsRepository = new PostsRepository();
    const postsService = new PostsService(postsRepository);
    const postsController = new PostsController(postsService);

    return {
        postsRepository,
        postsService,
        postsController
    }
}

const posts = postsFactory();

module.exports = { posts };