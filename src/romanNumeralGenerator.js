if (typeof exports === 'undefined') {
	var exports = this['numeral'] = {};
}

(function(exports){
	'use strict';

	exports.romanNumeralGenerator = function(int){
		if (int<1 || int>3999) {
			throw new Error('Can be generated only for number between 1 and 3999');
		}

		return 'I';
	};

})(exports);