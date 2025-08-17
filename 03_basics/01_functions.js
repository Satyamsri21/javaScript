// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("t");
//     console.log("y");
//     console.log("a");
//     console.log("m");
// }

// sayMyName()

// function addTwoNumber(number1,number2){
//     // console.log(number1+number2)
    

// }

function addTwoNumber(number1,number2){
    let result =number1+number2;
    return result


}

const result=addTwoNumber(2,3);

console.log(result)

function logInUserMsg(username="samm"){
    if(!username){
        console.log("Please enter user name")
        return
    }
    return `${username} just loged in`

}

console.log(logInUserMsg())

function calculateCartPrice(num){
    
    return num

}

console.log(calculateCartPrice(12,13));

function calculateCartPrice(...num){
    
    return num

}

console.log(calculateCartPrice(100,200,300))

function calculateCartPrice(val1,val2,...num){
    
    return num

}

console.log(calculateCartPrice(100,200,300))

const user={
    username:"satyam",
    email:"satyam@google.com"
}

function handleObject(anyobject){
    return `username is ${anyobject.username} and price is ${anyobject.email}`

}

// console.log(handleObject(user))
console.log(handleObject({username:"satyamji",email:"satyamji@google.com"}))


const newArray=[22,33,44,55]
function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue([1,2,3,4]))
console.log(returnSecondValue(newArray))