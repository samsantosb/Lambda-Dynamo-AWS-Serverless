function isJson(obj) {
    try {
        JSON.parse(obj);
    } catch (error) {
        return false;
    }
    return true;
}

function jsonParser(obj) {
    return JSON.parse(obj);
}

module.exports = { isJson, jsonParser };