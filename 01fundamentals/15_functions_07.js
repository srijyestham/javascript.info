'use strict';

function pow(x, n) {
	
	let result = x;
	
	for( let i = 1; i < n; i++ ) {
		
		result *= x;
	}
	return result;
}

alert(pow(2, 3));
