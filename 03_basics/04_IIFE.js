//Immediately invoked Function Expression(IIFE)

(function user(){
//named IIFE
    console.log("HI");
    
})();

//()() first bracker for declaratin second for the execution
//sometimes problem arrives due to global scope pollution so inorder to remove we use iife

((name)=>{
    console.log(`My name is ${name}`);
})("Harshu")