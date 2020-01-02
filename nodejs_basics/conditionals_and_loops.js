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
