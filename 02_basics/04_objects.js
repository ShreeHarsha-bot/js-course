// const user=new Object();
// const user={}

// user.id="132kjkd"
// user.name="Harsha"
// user.isLoggedIn=false;

// console.log(user);

const obj1={1:"H", 2:"A"}
const obj2={1:"S", 2:"I"}

const obj3={obj1,obj2}
// const obj4=Object.assign(obj1,obj2)
// const obj4=Object.assign({},obj1,obj2)

// const obj4={...obj1,...obj2}

// console.log(obj3);
// console.log(obj4);


const course={
    name:"JS course",
    price:"$99",
    courseInstructor:"Harsha"

}
// console.log(course.courseInstructor); //this is normal type we can also use destructor method too

const {courseInstructor:CI}=course;

console.log(CI);


