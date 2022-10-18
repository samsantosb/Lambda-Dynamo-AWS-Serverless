const { PromiseError } = require('../../utils/errorMessages/error.messages');

class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async getAllPosts(pages) {
        //get all posts and return them in pages of 10
        try {
            const posts = await this.postsRepository.getAllPosts(pages);
            return posts;
        } catch (error) {
            throw new PromiseError(error);
        }


    }

    async getPostById(id) {
        try {
            const post = await this.postsRepository.getPostById(id);
            return post;
        } catch (error) {
            return PromiseError(error);
        }
    }

    async createPost(post) {
        try {
            const createdPost = await this.postsRepository.createPost(post);
            return createdPost;
        } catch (error) {
            return PromiseError(error);
        }
    }

    async updatePostContent(id, post) {
        try {
            const updatedPost = await this.postsRepository.updatePostContent(id, post);
            return updatedPost;
        } catch (error) {
            return PromiseError(error);
        }
    }

    async updatePostTitle(id, post) {
        try {
            const updatedPost = await this.postsRepository.updatePostTitle(id, post);
            return updatedPost;
        } catch (error) {
            return PromiseError(error);
        }
    }

    async deletePost(id) {
        try {
            const deletedPost = await this.postsRepository.deletePost(id);
            return deletedPost;
        } catch (error) {
            return PromiseError(error);
        }
    }
}

module.exports = { PostsService };