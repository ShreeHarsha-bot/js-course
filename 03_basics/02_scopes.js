// // var c=300;
// let a=100;

// //outside all space is global scope
 
// if(true){      //block scope
//     let a=10;     
// const b=5;
// var c=2;
// console.log("Inner:",a);

// }

// console.log(a); //if it is in let and also inside any loop then it shows a is not defined it we try to access outside
// // console.log(b); //it is also gives same error 
// console.log(c);  // but this will not show the error 


//********************************************************************************************/

function one(){
    const name="Harshu";
    function two(){
        const course="BCA";
        console.log(name);
    }
    // console.log(course); //It is not possible to access inner to outer function but vice versa is possible
    //child can inherit from parent
    two()
}

one()

//now same for the for loop 
if(true){
    const userName="Shree"
    if(userName==="Shree"){
        const sem=3;
        console.log(userName+sem);
    }
    // console.log(sem);// this is not inherited
}

console.log(userName); // this also can't be inherited bcz it is only have value inside the loop
