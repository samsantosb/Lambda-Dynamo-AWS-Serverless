const { isJson } = require("./../../utils/jsonValidator/json.validator");

function smallStringVlidation(data) {
    if (typeof data === "string" &&
        data.length > 0 &&
        data.length < 34) {

        return true
    }

    return false;
}

function bigStringValidation(data) {
    if (typeof data === "string" &&
        data.length > 0 &&
        data.length < 100) {

        return true
    }

    return false
}

function booleanValidation(data) {
    if (typeof data === "boolean") {

        return true;
    }

    return false;
}

function fieldIsValid(post) {
    if (smallStringVlidation(post?.author) === false) {
        return false;
    }

    if (bigStringValidation(post?.title) === false) {
        return false;
    }

    if (bigStringValidation(post?.content) === false) {
        return false;
    }

    if (booleanValidation(post?.status) === false) {
        return false;
    }

    return true
}

function isBodyValid(post) {
    const correctPost = {
        author: post.author,
        title: post.title,
        content: post.content,
        status: post.status,
    }

    if (JSON.stringify(correctPost) === JSON.stringify(post)) {
        return true;
    }

    return false;
}

function isPostValid(post) {
    const isPostJson = isJson(post);
    const parsedPost = isPostJson ? JSON.parse(post) : post;

    if (fieldIsValid(parsedPost)) {
        return isBodyValid(parsedPost);
    }

    return false;
}

module.exports = { isPostValid };