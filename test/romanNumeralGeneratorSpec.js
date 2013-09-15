describe('Roman Numeral Generator', function() {
	'use strict';
	describe('Should', function(){

		it('throw execption if the param is not between 1 and 3999', function(){
			expect(numeral.romanNumeralGenerator.bind(null,0)).toThrow();
			expect(numeral.romanNumeralGenerator.bind(null,4000)).toThrow();
			expect(numeral.romanNumeralGenerator.bind(null,-1)).toThrow();
		});

		it('not to throw execption if the param is between 1 and 3999', function(){
			expect(numeral.romanNumeralGenerator.bind(null,1)).not.toThrow();
			expect(numeral.romanNumeralGenerator.bind(null,123)).not.toThrow();
			expect(numeral.romanNumeralGenerator.bind(null,888)).not.toThrow();
		});

		it('arabic 1 to be "I"', function(){
			expect(numeral.romanNumeralGenerator(1)).toBe('I');
		});

		it('arabic 5 to be "V"', function(){
			expect(numeral.romanNumeralGenerator(5)).toBe('V');
		});

		it('arabic 10 to be "X"', function(){
			expect(numeral.romanNumeralGenerator(10)).toBe('X');
		});

		it('arabic 20 to be "XX"', function(){
			expect(numeral.romanNumeralGenerator(20)).toBe('XX');
		});

		it('arabic 3999 to be "MMMCMXCIX"', function(){
			expect(numeral.romanNumeralGenerator(3999)).toBe('MMMCMXCIX');
		});

		it('arabic 2888 to be "MMDCCCLXXXVIII"', function(){
			expect(numeral.romanNumeralGenerator(2888)).toBe('MMDCCCLXXXVIII');
		});

	});
});