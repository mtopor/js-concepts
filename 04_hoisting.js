// console.log(sum(3,2));
//
// function sum(a, b) {
//     return a + b;
// }


// console.log(i);  //undefined
// i = 42;
// console.log(i);

// console.log(num);
// const num = 42; //same with let
// console.log(num);

// console.log(square(3));
// Function Expression & Fn Declaration
// function square(num) {
//     return num ** 2;
// } // declaration works fine

var square = function square(num) {
    return num ** 2;
}; //Function Expression works only after its declaration
console.log(square(3));