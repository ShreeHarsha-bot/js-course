function name() {
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("a");
    
}

name();

function sum(num1,num2) {
    console.log(num1+num2);
    
}

sum(1,1)

function isLoogedIn(username) {
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just loggeed in`
}

console.log(isLoogedIn("Harsha"))


function calculateCartPrice(...num1){  //rest operator
    return num1;
}

console.log(calculateCartPrice(2,3,3));

const user={
    username:"Harsha",
    price:444
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
