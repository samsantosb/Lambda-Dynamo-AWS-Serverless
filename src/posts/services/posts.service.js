const { PromiseError, InvalidIdError, InvalidBodyError } = require('../../utils/errorMessages/error.messages');

class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
}

module.exports = { PostsService };