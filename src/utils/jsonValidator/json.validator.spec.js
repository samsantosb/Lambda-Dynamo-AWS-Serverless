const { isJson, jsonParser } = require('./json.validator');

describe('json validator', () => {
    describe('isJson', () => {
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
    describe('jsonParser', () => {
        it('should return the parsed json', () => {
            const json = '{"name":"John"}';
            const result = jsonParser(json);
            expect(result).toEqual({ name: 'John' });
        })
    })
})