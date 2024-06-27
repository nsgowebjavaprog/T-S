// 1.Correct
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);  // [ 5, false, 'Coding God was here' ]

// // 2. Error
// // define our tuple
// let ourTuple1: [number, boolean, string];

// // initialized incorrectly which throws an error
// ourTuple1 = [false, 'Coding God was mistaken', 5];


// 3.Readonly Tuple

let ourTuple2: [number, boolean, string];

ourTuple2 = [5, false, 'Coding God was here'];

// no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');

console.log(ourTuple2);


// // 4.
// // define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
// console.log(ourReadonlyTuple);

// 5.

// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph)
/*
const graph: [number, number] = [55.2, 41.3];
console.log(graph); // Output: [55.2, 41.3]
*/

// const User: (string | number)[] = [1."Hello"]

let user: [string, number, boolean];
user = ["ns", 1212, true];

console.log(user); // outputs ["ns", 1212, true]


let rgb:[number, number,number] = [122,1212,1212]


let person: [number, string];
person = [123,"NS_LONI"]

console.log(person)