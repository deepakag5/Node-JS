// print a string
console.log("Hello World");

//print a string using variables
var x = "Hello";
var y = "World";

console.log(x + " " + y);

// assign and perform operations on variables
var a = 10;
var b = 20;
var c = 5;

console.log((a + b) * c);

console.log(a > b);

// undefined type
p = undefined;

console.log(p);

// constant type
const z = 5;

// below will throw an error as we cannot reassign to a constant var
//z = 6;

// AND, OR, NOT operations
var p = true;
var q = false;
console.log(p && q); // AND operation
console.log(p || q); // OR operation
console.log(!p); // NOT operation


// objects data
var student = {};
student.firstname = "David";
student.lastname = "Correll";
student.age = 20;
console.log(student);


var student = {
    firstname: "David",
    lastname: "Correll",
    age: 35
};
console.log(student);
console.log(student.firstname);
console.log(student.age);