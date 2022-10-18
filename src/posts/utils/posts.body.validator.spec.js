const { isPostValid } = require("./../utils/posts.body.validator");
const { postsForValidation } = require('./../__mocks__/fake.posts.data');

describe("isPostValid", () => {
    it("should return true if post is valid", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postThatIsValid)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(true);
    });
    it("should return false if author name is too long", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postWithLongAuthor)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(false);
    })
    it("should return false if title is too long", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postWithLongTitle)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(false);
    });
    it("should return false if content is too long", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postWithLongContent)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(false);
    });
    it("should return false if status is not boolean", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postWithInvalidStatus)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(false);
    });
    it("should return false if post is missing fields", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postWithMissingFields)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(false);
    });
    it("should return false if post has extra fields", () => {
        const dataTobeValidated = JSON.parse(postsForValidation.postWithExtraFields)
        const result = isPostValid(dataTobeValidated);
        expect(result).toBe(false);
    });
});
