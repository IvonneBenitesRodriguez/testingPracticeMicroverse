//stringLength.test.js

const stringLength = require('../js/stringLength');

test('returns the length of a valid string', () => {
    expect(stringLength('Panama')).toBe(6);
});

test('throws an error for an empty string', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
});

test('throws an error for a string longer than 10 characters', () => {
    expect(() => stringLength('ThisIsTooLong')).toThrow('String length must be between 1 and 10 characters');
});

test('throws and error for a non-string input', () => {
    expect(() => stringLength(123)).toThrow('Input must be a string');
});