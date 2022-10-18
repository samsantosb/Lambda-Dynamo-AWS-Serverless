const { isJson } = require('./json.validator');

describe('json validator', () => {
    it('should return true if the object is a valid json', () => {
        const json = '{"name":"John"}';
        const result = isJson(json);
        expect(result).toBe(true);
    })
    it('should return false if the object is not a valid json', () => {
        const json = '{"name":"John"';
        const result = isJson(json);
        expect(result).toBe(false);
    })
})