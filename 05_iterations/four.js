const myObj={
    js:"JavaScript",
    cpp:"c++",
    py:"Python",
    rb:"ruby"
}
// for (const lang of myObj) {
//     console.log(lang);    //this forof will not iteratble so use forin
// }

//forin

for (const key in myObj) {
    console.log(`${key} --> ${myObj[key]}`);
}