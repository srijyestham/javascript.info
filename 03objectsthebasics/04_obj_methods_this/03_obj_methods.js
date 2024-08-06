'user strict';

// this is not bound


let user = {
	name: "John"
};

let admin = {
	name: "Admin"
};

function sayHi() {
	alert(this.name);
}

// this is evaluated at runtime

user.f = sayHi;
admin.f = sayHi;

user.f(); // John
admin.f(); // Admin

admin['f'](); // Admin
user['f'](); // John
