if (typeof exports === 'undefined') {
	var exports = this['numeral'] = {};
}

(function(exports){
	'use strict';

	exports.romanNumeralGenerator = function(int){
		if (int<1 || int>3999) {
			throw new Error('Can be generated only for number between 1 and 3999');
		}

		var digits = [
			['','I','II','III','IV','V','VI','VII','VIII','IX'],
			['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
			['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
			['','M','MM','MMM']
		];

		var ret = '';
		var num = int.toString();

		for (var i=0; i<num.length; i++) {
			ret = digits[i][parseInt(num[num.length-(i+1)],10)] + ret;
		}

		return 'I';
	};

})(exports);