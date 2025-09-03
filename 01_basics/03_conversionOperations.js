
// let value="abc"
let value="abc123"

console.log(typeof value);
console.log(typeof (value));

let valueNum=Number(value);
console.log(typeof valueNum);
console.log(valueNum);//gives NaN not a number
console.log(typeof valueNum);

//"33" =>33
//"33abc"=> NaN
//true=>1 , false =>0

//1=>true.0=>false
//""=>false ,"anyValue"=>true