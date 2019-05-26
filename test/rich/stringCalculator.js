/**
 * String calculator kata excersice
 */

/**
 * Patterns to use
 * @type {Object}
 */
const PATTERNS = {
	EMPTY_SPACE: /^\s*$/g,
	NUMBERS: /[+-]?\d+/g,
	DELIMITERS: /[\n,]/g,
	FIND_DELIMETER: /(?:\/\/(.+)\n)/,
	FOUND_DELIMITER: /(?:\[(.+)\])+/
};
// (\/\/)
// (?:
// 	((?!\[|\]).+)|(\[([\S]+)\])
// 	)
// (\\n)
/**
 * StringCalculator
 * @type {Class}
 */
class StringCalculator {
	constructor() {}
	/**
	 * int Add(string numbers).
	 */
	add(values){
		
		if (!values){
			return 0;
		}

		if ( values.match( PATTERNS.EMPTY_SPACE )){
			return 0;
		}
		
		let regx;
		
		if ( values.match( PATTERNS.FIND_DELIMETER )){
			let delimeter = values.match( PATTERNS.FIND_DELIMETER );
			let formatted = delimeter[1].match( PATTERNS.FOUND_DELIMITER );
			delimeter = formatted ? formatted[1].split("][").join("") : delimeter[1]; // <-- magic
			let regex_exp = delimeter + "\n,";
			regx = new RegExp(`[${regex_exp}]`, "g");
			values = values.replace( PATTERNS.FIND_DELIMETER, "" );
		} else{
			regx = PATTERNS.DELIMITERS;
		}

		let numbers = values.split( regx ).map( Number ).filter(n=>n<1001); // filter biggers

		if ( numbers.filter(n=>n<0).length ){
			throw new Error(`negatives not allowed ${numbers.filter(n=>n<0).join(",")}`); // don't allow negatives
		}
		
		return numbers.reduce(( accumulator, currentValue ) => accumulator + currentValue );
	}
}

module.exports = new StringCalculator();