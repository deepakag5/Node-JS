// functions

// synchronous functions
// function add(a, b) {
//     return (a+b);
// }
//
// console.log(add(1,2));
// console.log(add(3,5));

// asynchronous functions
function add(a, b, callback) {
    callback(a + b);
}

function print(c) {
    console.log(c);
}

add(1, 2, print);

// in-line functions - remember in-line functions are available only for that particular operation

// writing asynchronous function in-line
add(1, 2, function (c) {
    console.log(c)
})

// writing asynchronous function in-line shorthand
add(1, 2, (c) => {
    console.log(c);
});

// writing asynchronous function in-line shorthand - one liner
add(1, 2, (c) => console.log(c));


function add(a, b, callback) {
    callback(a + b);
}

var a = 5;
var b = 3;
var c = 20;

add(a, b, (c) => console.log(c));  // scope within this function prints 8

console.log(c);  // prints value of c assigned by var

// local and global scope

var a = 10;

// local scope using let keyword
if (true) {
    let a = 20;  // local scope - prints 20
    console.log(a);
}

console.log(a);  // global scope - prints 10