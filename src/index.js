//import { pipe } from 'lodash/fp';
// ## Function Composition

//const tirm = str => str.tirm();
// const wrapInDiv = str => `<div> ${str} </div>`;
// const wrpaInSpan = str => `<span> ${str} </span>`;

// const wrap = (type, str) => `<${type}> ${str} </${type}>`
//const wrap = type => str => `<${type}> ${str} </${type}>`;
//const toLowerCase = str = str.toLowerCase();


//const transform = pipe(tirm, toLowerCase, wrap("div"));
//this is going to give an error because the resault of wrap() is not a function
//so our proplem is the wrap() has 2 arguments so to fix that we are going to use "currying"
//transform(input)

//-------------------------------------------------------------------------------------------
// ## Pure Function
//gives the same result everytime we call it
// No random values
// No current date/time
//No global state (DOM, files, db, etc)
//No mutation of paraameters

//##Benefits of pure functions
// self-documenting
// easily testable
// concurrency
//cacheable

//---------------------------------------------------------------------------------------------
// ##Immutability
// Once created, "an object" ca not be changed 
//In JS objects are not immutable

//##Benefits of Immutability
//Predictability
//Faster change detection
//Concurrency

//Structureal sharing library to reduce the memory overhead

//---------------------------------------------------------------------------------------------
// update an object
const person = { name: "Yas" };
const update = { ...person, name: "Yas KLuw" };
console.log(update);


const numbers = [1, 2, 3];

//Adding
let added = [...numbers, 4]
console.log('added', added);

//in the begining
added = [4, ...numbers]
console.log('added', added);

//specific position in the array : index 3
const index = numbers.indexOf(3);
added = [...numbers.slice(0, index), 6, ...numbers.slice(index)]
console.log('added', added);

//Removing
const removed = numbers.filter(n => n !== 2)
console.log('removed', removed);

//Updateing
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log('updated', updated);
