const {
    promiseError,
    invalidIdError,
    invalidBodyError,
} = require("./error.messages");

describe("ErrorMessages", () => {
    it("should create the promise error", () => {
        const error = promiseError("error");
        expect(error).toBeDefined();
    });
    it("promise error should be an object", () => {
        const error = promiseError("error");
        expect(typeof error).toBe("object");
    });
    it("should create the invalid id error", () => {
        const error = invalidIdError("id");
        expect(error).toBeDefined();
    });
    it("invalid id error should be an object", () => {
        const error = invalidIdError("id");
        expect(typeof error).toBe("object");
    });
    it("should create the invalid body error", () => {
        const error = invalidBodyError("body");
        expect(error).toBeDefined();
    });
    it("invalid body error should be an object", () => {
        const error = invalidBodyError("body");
        expect(typeof error).toBe("object");
    });
});