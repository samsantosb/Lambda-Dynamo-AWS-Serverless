const { promiseError } = require('../../utils/errorMessages/error.messages');

class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async getAllPosts(pages) {
        try {
            const posts = await this.postsRepository.getAllPosts(pages);
            return posts;
        } catch (error) {
            return promiseError(error);
        }


    }

    async getPostById(id) {
        try {
            const post = await this.postsRepository.getPostById(id);
            return post;
        } catch (error) {
            return promiseError(error);
        }
    }

    async createPost(post) {
        try {
            const createdPost = await this.postsRepository.createPost(post);
            return createdPost;
        } catch (error) {
            return promiseError(error);
        }
    }

    async updatePostContent(id, post) {
        try {
            const updatedPost = await this.postsRepository.updatePostContent(id, post);
            return updatedPost;
        } catch (error) {
            return promiseError(error);
        }
    }

    async updatePostTitle(id, post) {
        try {
            const updatedPost = await this.postsRepository.updatePostTitle(id, post);
            return updatedPost;
        } catch (error) {
            return promiseError(error);
        }
    }

    async deletePost(id) {
        try {
            const deletedPost = await this.postsRepository.deletePost(id);
            return deletedPost;
        } catch (error) {
            return promiseError(error);
        }
    }
}

module.exports = { PostsService };