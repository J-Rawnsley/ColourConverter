const { rgb, hsl } = require('./colourConvert');

describe('rgb to hex converter', () => {
	it('returns a string', () => {
		const result = rgb(100, 0, 255);
		expect(typeof result).toBe('string');
	});

	it('returns a string with a length of 6 characters', () => {
		const result = rgb(100, 0, 255);
		expect(result.length).toBe(6);
	});

	it('returns a correct conversion from rgb to hex colour 1', () => {
		const result = rgb(100, 0, 255);
		expect(result).toBe('6400FF');
	});

	it('returns a correct conversion from rgb to hex colour 2', () => {
		const result = rgb(200, 76, 0);
		expect(result).toBe('C84C00');
	});

	it('returns a correct conversion from rgb to hex colour 3', () => {
		const result = rgb(67, 183, 104);
		expect(result).toBe('43B768');
	});

	it('returns a correct conversion from rgb to hex colour 4', () => {
		const result = rgb(187, 45, 230);
		expect(result).toBe('BB2DE6');
	});

	it('returns a correct conversion from rgb to hex colour 5', () => {
		const result = rgb(0, 0, 0);
		expect(result).toBe('000000');
	});

	it('rounds numbers to closest value in range 0-255 (test 1)', () => {
		const result = rgb(187, 45, 300);
		expect(result).toBe('BB2DFF');
	});

	it('rounds numbers to closest value in range 0-255 (test 2 including negative numbers)', () => {
		const result = rgb(-78, 270, 230);
		expect(result).toBe('00FFE6');
	});

	it('throws an error if input values are strings', () => {
		expect(() => {
			rgb('187', 45, 230);
		}).toThrow();
	});

	it('throws an error when no arguments are provided', () => {
		expect(() => {
			rgb();
		}).toThrow();
	});

	it('throws an error when not enough arguments are provided', () => {
		expect(() => {
			rgb(45, 230);
		}).toThrow();
	});

	it('throws an error when arguents are inside an array', () => {
		expect(() => {
			rgb([45, 300, 0]);
		}).toThrow();
	});
});

describe('hsl to hex converter', () => {
	it('returns a string', () => {
		const result = hsl(264, 100, 50);
		expect(typeof result).toBe('string');
	});

	it('returns a string with a length of 6 characters', () => {
		const result = hsl(264, 100, 50);
		expect(result.length).toBe(6);
	});

	it('returns a correct conversion of achromatic colours', () => {
		const result = hsl(264, 0, 50);
		expect(result).toBe("808080");
	});

	it('returns a correct conversion from rgb to hex colour 1', () => {
		const result = hsl(264, 100, 50);
		expect(result).toBe('6600FF');
	});

	it('returns a correct conversion from rgb to hex colour 2', () => {
		const result = hsl(23, 100, 39);
		expect(result).toBe('C74C00');
	});

	it('returns a correct conversion from rgb to hex colour 3', () => {
		const result = hsl(139, 46, 49);
		expect(result).toBe('43B668');
	});

	it('returns a correct conversion from rgb to hex colour 4', () => {
		const result = hsl(286, 79, 54);
		expect(result).toBe('BB2DE6');
	});

	it('returns a correct conversion from rgb to hex colour 5', () => {
		const result = hsl(0, 0, 0);
		expect(result).toBe('000000');
	});

	it('rounds numbers to closest value in range 0-360 (hue) and 0-100 (saturation, lightness)(test 1)', () => {
		const result = hsl(500, 100, 59);
		expect(result).toBe('FF2E2E');
	});

	it('rounds numbers to closest value in range 0-360 (hue) and 0-100 (saturation, lightness)(test 2)', () => {
		const result = hsl(-78, -45, 48);
		expect(result).toBe('7A7A7A');
	});

	it('throws an error if input values are strings', () => {
		expect(() => {
			hsl('187', 45, 76);
		}).toThrow();
	});

	it('throws an error when no arguments are provided', () => {
		expect(() => {
			hsl();
		}).toThrow();
	});

	it('throws an error when not enough arguments are provided', () => {
		expect(() => {
			hsl(45, 29);
		}).toThrow();
	});

	it('throws an error when arguents are inside an array', () => {
		expect(() => {
			hsl([245, 75, 12]);
		}).toThrow();
	});
});
