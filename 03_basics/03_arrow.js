/*
const user={
    username:"Harsha",
    price:888,
    welcomeMsg:function(){
     console.log(`${this.username} , welcome to website`);
     console.log(this);  //shows current all values
     
    }
}

user.welcomeMsg()
user.username="Guru"
user.welcomeMsg()

console.log(this);

*/

// function uInfo(){
//   let name = "Harsha"
//   console.log(this.name);
// }
// uInfo();  //it gives undefined if we use the this keyword inside the function 

//Arrow function

const userInfo =()=>{
    let name="Rohith"
    console.log(name);
}
userInfo()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }


//implicit return 
const addTwo=(num1,num2)=> (num1+num2)   //here no return keyword is used when you didn't used paranthesis
console.log(addTwo(2,2));

 //explicit is which we use the parenthisis above addTwo function one is the example