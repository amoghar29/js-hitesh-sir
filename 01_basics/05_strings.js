const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// best way to write the code which involves concatination of variables
// op will be same as line 4 but this is the modern way of writing

const gameName = new String('hitesh-hc-com')// aother type of declaring a string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // we cannot use negative values here
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we can use negative values, works same as slicing in python.
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // used to remove white spaces , same as strip in python

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));