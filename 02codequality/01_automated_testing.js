'use strict';

/*
describe("pow", function() {
	
	it("2 raised to power 3 is 8", function() {
		
		assert.equal(pow(2, 3), 8);
		// first case with more than one assert in it block
		//assert.equal(pow(2, 3), 1);
	});
	
	// second case two different tests
	it("3 raised to power 4 is 81", function() {
		assert.equal(pow(3, 4), 81); 
	});
});
*/

/*
// multiple tests checks
describe("pow", function() {
	
	function makeTest(x) {
		let expected = x * x * x;
		
		it(`${x} in the power 3 is ${expected}`, function() {
			assert.equal(pow(x, 3), expected);
		});
	}
	
	for (let x = 1; x <= 5; x++) {
		makeTest(x);
	}
});
*/



// nested tests

describe("pow", function() {
	
	describe("raises to nth power", function() {
		
		function makeTest(x) {
			let expected = x * x * x;
			
			it(`${x} in the power 3 is ${expected}`, function() {
				assert.equal(pow(x, 3), expected);
			});
		}
		
		for (let x = 1; x <= 5; x++) {
			makeTest(x);
		}
		
	});
	
	// more tests to follow here
	
	it("for negative n the result is NaN", function() {
		assert.isNaN(pow(2, -1));
	});
	
	it("for non-integer n the result is NaN", function() {
		assert.isNaN(pow(2, 1.5));
	});
	
});



/*
describe("test", function() {
	
	this.timeout(20000);
	
	before( () => alert("Testing started - before all tests"));
	after( () => alert("Testing finished - after all tests"));
	
	beforeEach( () => alert("Before a test - enter a test"));
	afterEach( () => alert("After a test - exit a test"));
	
	it("test 1", () => alert(1));
	it("test 2", () => alert(2));
	
});
*/
















