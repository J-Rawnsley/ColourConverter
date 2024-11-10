function rgb(r, g, b) {
	const isValidArg = (arg) => typeof arg === 'number';

	if (!isValidArg(r) || !isValidArg(g) || !isValidArg(b)) {
		console.log(arguments, 'valid rgb value not provided');
		throw new Error('valid rgb value not provided');
	}

	const toHex = (value) => {
		if (value > 255) {
			value = 255;
		}
		if (value < 0) {
			value = 0;
		}
		return value.toString(16).toUpperCase().padStart(2, 0);
	};

	const fullHexCode = toHex(r) + toHex(g) + toHex(b);
	console.log(arguments, fullHexCode);

	return fullHexCode;
}

function hsl(h, s, l) {
	return 'hsl input converter activated';
}

module.exports = { rgb, hsl };
