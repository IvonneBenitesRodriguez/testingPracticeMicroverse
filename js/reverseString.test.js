
const reverseString = require('../js/reverseString');

test('reverseString returns the string reversed', () => {
    expect(reverseString('')).toBe('');
    //test when input string has one character
    expect(reverseString('a')).toBe('a');
    //test when input string has multiple characters
    expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
    //test when input string contains numbers and special characters
    expect(reverseString('12345$%^')).toBe('^%$54321');
});
