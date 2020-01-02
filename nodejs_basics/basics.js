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

// conditionals
var a = 0
var b = 0

if (a > b) {
    console.log("a is greater than b");
} else if (b > a) {
    console.log("b is greater than a");
} else {
    console.log("a is equal to b");
}

console.log("Here")

//loops
var i = 1;
var limit = 5;

while (i < limit) {
    console.log("in this")
    console.log(i);
    i++;
} // be mindful that i value is increasing in-place - after end of this loop value of i will be 5 not 1 !!


do {
    console.log("or this")
    console.log(i);
    i++;
} while (i < limit);  // this will run at least once

for (i = 0; i < limit; i++) {
    console.log(i);
}

var arr = [10, 20, 30];  // iterate over array
arr.forEach(function (item) {   // method 1 using forEach
    console.log(item);
})

var arr = [10, 20, 30];
for (var i of arr) {        //  method-2
    console.log(i);
}