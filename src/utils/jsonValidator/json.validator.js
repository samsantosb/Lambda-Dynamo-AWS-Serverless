function isJson(obj) {
    try {
        JSON.parse(obj);
    } catch (error) {
        return false;
    }
    return true;
}

module.exports = { isJson };