// task 02 tests

describe("isEmpty", function() {
	
	it("returns true for an empty object", function() {
		
		assert.isTrue(isEmpty({}));
	});
	
	it("returns false of a property exists", function() {
		assert.isFalse(isEmpty({ anything: false }));
	});
});
