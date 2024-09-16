'use strict';


// task 2

let calculator = {
	
	read() {
		this.a = +prompt('a?: ', 0);
		this.b = +prompt('b?: ', 0);
	},
	
	sum() {
		return this.a + this.b;
	},
	
	mul() {
		return this.a * this.b;
	}
};

calculator.read();
alert("The Sum is " + calculator.sum());
alert("The Multiplication result is " + calculator.mul());


// task 3

let ladder = {
	
	step: 0,
	
	up() {
		this.step++;
		return this;
	},
	
	down() {
		this.step--;
		return this;
	},
	
	showStep: function() {
		alert(this.step);
		return this;
	}
};

ladder
	.up() // +1
	.up() // +1
	.down() // -1
	.showStep() // 1
	.down() // -1
	.showStep(); // 0
