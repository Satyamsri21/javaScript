const user={
    username:"satyam",
    price:999,
    welcomeMessage:function(){
        // console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
}
user.welcomeMessage()
user.username="srivastava"
user.welcomeMessage()

function codewise(){
    let username="satyam"
    console.log(this.username)
}
codewise()

// const codewise101 = function(){
//     let username="satyam";
//     console.log(codewise101)
// }
// codewise101()


const codewise101 = ()=>{
    let username="satyam";
    console.log(this)
}
codewise101()

const addtwo=(num1,num2)=>{
    return num1+num2

}

const addtwo=(num1,num2)=>num1+num2
const addtwo=(num1,num2)=>(num1+num2)
const addtwo=(num1,num2)=>({username:"satyam"})