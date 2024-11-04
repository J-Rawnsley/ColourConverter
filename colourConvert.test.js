const rgb = require('./colourConvert');

test('rgb function returns a string', () => {
	expect(typeof rgb()).toBe('string');
});
