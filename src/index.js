import { pipe } from 'lodash/fp';
// ## Function Composition

const trim = str => str.trim();
// const wrapInDiv = str => `<div> ${str} </div>`;
// const wrpaInSpan = str => `<span> ${str} </span>`;

// const wrap = (type, str) => `<${type}> ${str} </${type}>`
const wrap = type => str => `<${type}> ${str} </${type}>`;
const toLowerCase = str = str.toLowerCase();


const transform = pipe(tirm, toLowerCase, wrap("div"));
//this is going to give an error because the resault of wrap() is not a function
//so our proplem is the wrap() has 2 arguments so to fix that we are going to use "currying"
transform(input)

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