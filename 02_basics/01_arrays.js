// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methodsf

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//doesnt mannipulate the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//splice manipulates the orignal array by removing all the elements spliced
// also in splice the last no. is counted, eg- here (1,3) is given so it goes from1,2,3 where as in slice it goes only till 2(ie n-1)
console.log("C ", myArr);
console.log(myn2);
