const rgb = require('./colourConvert');

test('rgb function returns a string', () => {
	const result = rgb(100, 0, 255);
	expect(typeof result).toBe('string');
});

test("returned string has a length of 6 characters", () => {
	const result = rgb(100, 0, 255)
	expect(result.length).toBe(6)
})

test("result is a correct conversion from rgb to hex colour 1", () => {
	const result = rgb(100, 0, 255)
	expect(result).toBe("6400FF")
})

test("result is a correct conversion from rgb to hex colour 2", () => {
	const result = rgb(200, 76, 0)
	expect(result).toBe("C84C00")
})

test("result is a correct conversion from rgb to hex colour 3", () => {
	const result = rgb(67, 183, 104)
	expect(result).toBe("43B768")
})

test("result is a correct conversion from rgb to hex colour 4", () => {
	const result = rgb(187, 45, 230)
	expect(result).toBe("BB2DE6")
})

test("result is a correct conversion from rgb to hex colour 5", () => {
	const result = rgb(0, 0, 0)
	expect(result).toBe("000000")
})

test("numbers outsode range are rounded to closest value in range 1", () => {
	const result = rgb(187, 45, 300)
	expect(result).toBe("BB2DFF")
})

test("numbers outsode range are rounded to closest value in range 1", () => {
	const result = rgb(-78, 270, 230)
	expect(result).toBe("00FFE6")
})


test("invalid input returns error message 1", () => {
	expect(() => {rgb("187", 45, 230)}).toThrow()
})

test("invalid input returns error message 1", () => {
	expect(() => {rgb()}).toThrow()
})

test("invalid input returns error message 1", () => {
	expect(() => {rgb(45, 230)}).toThrow()
})

test("invalid input returns error message 1", () => {
	expect(() => {rgb([45, 300, 0])}).toThrow()
})

