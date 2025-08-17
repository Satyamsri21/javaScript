const tinderUser={}
tinderUser.id="sam123"
tinderUser.name="satyam"
tinderUser.isLoggedIn=true
// console.log(typeof tinderUser)
// console.log(tinderUser)

const regularUser={
    email:"satyam123@google.com",
    fullname:{
        UserName:{
            firstname:"satyam",
            lastname:"srivastava"
        }

    }
}

// console.log(regularUser.fullname.UserName.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"s@google.com"
    },
    {
        id:1,
        email:"a@google.com"
    },
    {
        id:1,
        email:"t@google.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course ={
    coursename:"js",
    price:"free",
    courseInstructor:"satyam"
}

console.log(course.coursename)

const {courseInstructor:instructor}=course

console.log(instructor)