const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  //gives the output in the number of decimal places
                                   // here we have given toFixed(1) i.e upto 1 decimal place

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // similar to significant figures learned for jee

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// gives values with commas

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // rounds of to the next number if decimal exists
// console.log(Math.floor(4.9)); // rounds of to the preceding number if decimal exists
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives random vales btw 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)