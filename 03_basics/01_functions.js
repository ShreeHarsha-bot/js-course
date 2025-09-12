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