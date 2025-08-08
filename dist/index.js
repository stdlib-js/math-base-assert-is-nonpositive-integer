/** @license Apache-2.0 */

'use strict';

/**
* Test if a finite double-precision floating-point number is a nonpositive integer.
*
* @module @stdlib/math-base-assert-is-nonpositive-integer
*
* @example
* var isNonPositiveInteger = require( '@stdlib/math-base-assert-is-nonpositive-integer' );
*
* var bool = isNonPositiveInteger( -1.0 );
* // returns true
*
* bool = isNonPositiveInteger( 0.0 );
* // returns true
*
* bool = isNonPositiveInteger( 10.0 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
