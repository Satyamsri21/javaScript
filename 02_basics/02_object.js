const mySym=Symbol("key1")


let jsUser={
    name:"satyam",
    "full name":"satyam srivastava",
    [mySym]:"key12",
    age:15,
    location:"lucknow",
    email:"satyam@google.com",
    isLoggedIn:true,
    lastLoginDate:["Monday","tuesday"]

}

// jsUser.email="satyam1@chatgpt.com"
// console.log(jsUser)
// Object.freeze(jsUser)
// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// jsUser.email="satyam1@cgpt.com"

jsUser.greeting=function(){
    console.log("hello js user")
}
jsUser.greetingTwo=function(){
    console.log(`hello js use ${this["full name"]}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
