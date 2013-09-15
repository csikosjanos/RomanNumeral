if (typeof exports === 'undefined') {
	this['numeral'] = {}; // namespace for browser
}

(function(exports){
	'use strict';

	//Roman numeral digits (covers upto 3999)
	var digits = [
		['','I','II','III','IV','V','VI','VII','VIII','IX'],
		['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
		['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
		['','M','MM','MMM']
	];

	exports.romanNumeralGenerator = function(int){
		//Caveat: Only support numbers between 1 and 3999
		if (int<1 || int>3999) {
			throw new Error('Can be generated only for number between 1 and 3999');
		}

		var ret = '';
		var num = int.toString();

		for (var i=0; i<num.length; i++) {
			ret = digits[i][parseInt(num[num.length-(i+1)],10)] + ret;
		}

		return ret;
	};

})(exports || this['numeral']);