'use strict';

let i = 0;

while(i < 3) {
	alert(i);  // 0,1,2
	i++;
}

alert("2nd while loop");

i = 3;
while (i) { // condition is true till i becomes 0 ie false
	alert(i);
	i--;
}

/*
while(i = 1) { // infinte loop
	alert(i);
}
*/

i = 3;
while(i) alert(i--); // 3,2,1


alert("do while loop");

i = 0;
 do {
	 alert(i); // 0,1,2
	 i++;
} while (i < 3);


alert("for loop");

for (let a = 0; a < 3; a++) {
	alert(a); // 0,1,2
}

alert("outside begin value");
let b = 0;

for (b = 0; b < 3; b++) {
	alert(b*10); // 0,10,20
}

alert("outside value access");
alert(b*10); // 30



let c = 0;

for (; c < 3; c++) { // begin value considered 0
	alert(c); // 0,1,2
}


c = 0;

for(; c < 3; ) {
	alert(c++); // 0,1,2
}

/*
 * for (;;) {
 *  // infinte loop, repeats without limits
 * }
*/

alert("break directive");

let sum = 0;

while (true) { // infinte loop
	
	let value = +prompt("Enter a number", '');
	
	if (!value) break; // (*)
	
	sum += value; // adds value
}
alert("Sum: " + sum);



alert("continue directive");

let d ;

for (d = 0; d < 10; d++) {
	
	if (d % 2 === 0) continue;
	
	alert(d); // 1,3,5,7,9
}

alert("nesting");



for (d = 0; d < 10; d++) {

	if (d % 2) {
		alert(d); // neseted loop approach
	}			  // not recommended, above appraoch decreases
}				  // decreases nesting

alert("Value of d is : " + d);

/*
if (d > 9) {
	alert(d);
} else {
	continue;
	
}
*/

// (d > 9) ? alert(d) : continue; 
// continue is directive


alert("Labels");

outer: for (i = 0; i < 3; i++) {
	
	for (let j = 0; j < 3; j++) {
		
		let input = prompt(`Value at coords (${i},${j})`, '');
		
		if (!input) break outer;
	} 
} 

alert("Done!");

outer2: for(i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		
		let input = prompt(`Value at coords (${i},${j})`,'');
		
		if (!input) continue outer2;
	}
}

alert("Done!");


