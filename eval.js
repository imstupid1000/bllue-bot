function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function evaluate(input) {
	let result = eval(input);
	if (result)
		result = result.toString().replace(new RegExp(escapeRegExp(token), 'g'), '<token removed>');
	return result;
}