//Arrays

const myArr=[1,2,3,4,5,6]
const myArr1=["harsha","guru","harish"]
// console.log(myArr[0]);
// console.log(myArr1[0]);

//array methods

// myArr.push(7);
// myArr.pop();

// myArr.unshift(12);
// myArr.shift(12);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));

// console.log(myArr);

//slice and splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3);//1 and 2 index and not include the third one
console.log(myn1);

console.log("B ",myArr);
const myn2=myArr.splice(1,3);
console.log("C ",myArr);  //if we use splice the original array gets manupulated
console.log(myn2);





