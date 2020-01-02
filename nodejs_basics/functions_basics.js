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


