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


//z = 6; // this will throw an error as we cannot reassign to a constant var

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

// arrays
var x = [10, 20, 30];
var y = [10, 20, "David", true];

console.log(x[0]);
console.log(y[2]);

console.log(x.length);


x[2] = 40; // reassign array value
console.log(x);

x.push(50, 60); // add values to array
console.log(x);

x.pop();    // remove last value
console.log(x);