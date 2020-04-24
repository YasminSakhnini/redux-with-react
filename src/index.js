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

