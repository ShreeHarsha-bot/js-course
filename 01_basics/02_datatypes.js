let age=18
let isLogin=false
let state=null

//number => 2 to power 53
//bigint
//string=>""
//boolean=>true/false
//null=>standalone value
//undefined =>value not assigned
//symbol =>uniqueness


//object

console.log(typeof age)
console.log(typeof null) //object
console.log(typeof undefined) //undefined


//primitive 7 types they are:
//String,Number,Boolean,null,undefined,Symbol,BigInt

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId);//gives false 



//Reference(Non primitive)
//Array,object,functions