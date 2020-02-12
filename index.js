const isString = require('is-string');

module.exports = function(chr) {
	if (!isString(chr)){
		return false;
	} else if (chr.length > 1){
		return false;
	}

	return true;
}
