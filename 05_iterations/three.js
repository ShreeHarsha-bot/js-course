//for of

//["","",""]
//[{},{},{}]

const arr=[101,112,134,223,232]

for (const id of arr) {
    // console.log(id);
    
}

const greetings="HI..." 
for (const greet of greetings) {
    // console.log(greet);
}

//Maps (it only gives the unique values like avoids the duplication)

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN',"India")  //it will not be executed again

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}
