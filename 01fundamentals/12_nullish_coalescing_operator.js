'use strict';

let user;

alert(user ?? "Anonymous"); // Anonymous

user = "John";

alert(user ?? "Anonymous"); // John


let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

firstName = "A";
lastName = "B";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); //A

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // ??

height = null;
let width = null;
 
let area = (height ?? 100) * (width ?? 50);
 
alert(area); // 5000

// area = heigth ?? 100 * width ?? 50; // error

// let x = 1 && 2 ?? 3; // syntax error

let x = (1 && 2) ?? 3; 
alert(x); // 2

height = height ?? 100; // height = null
alert(height); // 100

