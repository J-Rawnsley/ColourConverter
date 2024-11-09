function rgb(r, g, b) {

	const isValidArg = (arg) => typeof arg === "number" && arg >= 0 && arg <= 255

	if(!isValidArg(r) || !isValidArg(g) || !isValidArg(b)) {
		console.log(arguments, "valid rgb value not provided")
		throw new Error("valid rgb value not provided")
	}

	const toHex = (value) => value.toString(16).toUpperCase().padStart(2, 0);

	const fullHexCode = "#" + toHex(r) + toHex(g) + toHex(b);
	console.log(arguments, fullHexCode)

	return fullHexCode;
}

module.exports = rgb