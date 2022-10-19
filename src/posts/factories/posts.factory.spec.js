const { posts } = require('../factories/posts.factory');

describe('posts factory', () => {
    it('should be defined', () => {
        expect(posts).toBeDefined();
    });
    it('should be an object', () => {
        expect(typeof posts).toBe('object');
    });
    it('should contain a .getAllPosts method', () => {
        expect(posts.getAllPosts).toBeDefined();
    });
    it('should contain a .getPostById method', () => {
        expect(posts.getPostById).toBeDefined();
    });
    it('should contain a .createPost method', () => {
        expect(posts.createPost).toBeDefined();
    });
    it('should contain a .updatePostContent method', () => {
        expect(posts.updatePostContent).toBeDefined();
    });
    it('should contain a .updatePostTitle method', () => {
        expect(posts.updatePostTitle).toBeDefined();
    });
    it('should contain a .deletePost method', () => {
        expect(posts.deletePost).toBeDefined();
    });
});

