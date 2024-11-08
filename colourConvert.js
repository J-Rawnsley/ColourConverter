function rgb(r, g, b) {

	const isValidArg = (arg) => typeof arg === "number" && arg >= 0 && arg <= 255

	if(!isValidArg(r) || !isValidArg(g) || !isValidArg(b)) {
		console.log("one or more arguments is not valid")
		throw new Error("one or more arguments is not valid")
	}

	const toHex = (value) => value.toString(16).toUpperCase().padStart(2, 0);

	const fullHexCode = "#" + toHex(r) + toHex(g) + toHex(b);
	console.log(fullHexCode)

	return fullHexCode;
}

module.exports = rgb