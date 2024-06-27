// Array String
/*
const names: string[] = [];
names.push("Dylan"); 
console.log(names)   // [ 'Dylan' ]

// The readonly keyword can prevent arrays from being changed

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);


// Type Inference

const number = [1, 2, 3]; // inferred to type number[]
number.push(4);
number.push(7);

//let head: number = number[0];   // [ 1, 2, 3, 4, 7 ]
console.log(number)
*/

// 1.

// const Super_Heros: string[] = [];
// Super_Heros.push("NS-LONI")            //  [ 'NS-LONI' ]
// console.log(Super_Heros)

// 2.

type user = {
    name: string;
    is_active: boolean;
}
  
const allusers: User[] = [];

allusers.push({name: "Hello",is_active: false });
  
console.log(allusers); // outputs [{ name: " ", is_active: true }, { name: "Hello", is_active: false }]
