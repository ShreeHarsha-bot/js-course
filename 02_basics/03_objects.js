//singleton(when we use the literals then no singleton if we use the constructor then it is there )

//object literals

const mySym=Symbol("key1")//to use the symbol inside the object it must inside [ ]this

const student={
    name:"Harsha",
    [mySym]:"mykey1",
    age:19,
    location:"karnataka",
    email:"harsha@google.com",
    isLogedIn:false
}

// console.log(student.name,student.age);   //these are the two ways to access value  
// console.log(student["name"]);

// console.log(student[mySym]);
// console.log( typeof student[mySym]);

// student.email="harsha@insta.com"
// Object.freeze(student);      //it freezes whatever we change it not affects
// student.email="harsha@gmail.com"
// console.log(student);

student.greeting=function(){
    console.log("Hello guys");
    
}

student.greetingTwo=function(){
    console.log(`Hello ${this.name}`);
    
}

console.log(student.greeting);
console.log(student.greeting());
console.log(student.greetingTwo());

