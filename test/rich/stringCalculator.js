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
 * Utility helper
 * @type {Class}
 */
class Helper {
	isString(value){
		return typeof value === 'string' || value instanceof String;
	}
	isNumber(value){
		return typeof value === 'number' && isFinite(value);
	}
	isArray(value){
		return value && typeof value === 'object' && value.constructor === Array;
	}
	isFunction(value){
		return typeof value === 'function';
	}
	isObject(value){
		return value && typeof value === 'object' && value.constructor === Object;
	}
	isNull(value){
		return value === null;
	}
}
class StringCalculator {
	constructor( helper ) {
		this.helper = helper;
	}
	/**
	 * int Add(string numbers).
	 */
	add(values){
		
		if (!values){
			return 0;
		}
		
		let isString = this.helper.isString(values);
		
		if (isString && values.match( PATTERNS.EMPTY_SPACE )){
			return 0;
		}
		let delimeter = isString && values.match( PATTERNS.FIND_DELIMETER );
		let regx;
		if( delimeter ) {
			let formatted = delimeter[1].match( PATTERNS.FOUND_DELIMITER );
			delimeter = formatted ? formatted[1].split("][").join("") : delimeter[1];
			let regex_exp = delimeter + "\n";

			regx = new RegExp(`[${regex_exp},]`, "g");
			values = values.replace( PATTERNS.FIND_DELIMETER, "" );
		} else {
			regx = PATTERNS.DELIMITERS;
		}

		let matchNumbers = isString && values.split( regx ).map( Number );
		let filterNegatives = matchNumbers && matchNumbers.filter(n=>n<0);

		if(isString && matchNumbers && filterNegatives.length > 0) {
			throw new Error(`negatives not allowed ${filterNegatives.join(",")}`);
		}

		let filterBigger = matchNumbers && matchNumbers.filter(n=>n<1001);

		if (isString && filterBigger){
			return this.add( filterBigger ); // lol
		}
		
		return values.reduce(( accumulator, currentValue ) => accumulator + currentValue );
	}
}

module.exports = new StringCalculator( new Helper() );