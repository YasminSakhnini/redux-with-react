import { compose, pipe } from 'lodash/fp';
// ## Function Composition

const trim = str => str.trim();
const wrapInDiv = str => `<div> ${str} </div>`;
const toLowerCase = str = str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

//-------------------------------------------------------------------
//Composing and Piping
//Lodash library
const transform = compose(wrapInDiv, toLowerCase, tirm)
transform(input)
// it does exactly as
//const result = wrapInDiv(toLowerCase(trim(input)));


// to do the same thing with the correct order we use pipe
const transform = pipe(tirm, toLowerCase, wrapInDiv)

