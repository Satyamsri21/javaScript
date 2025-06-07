//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "satyam",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) and heap(non- primitive)

let youtubeName="codewise101";

let anotherName=youtubeName;
anotherName="codewise101satyam";
console.log(youtubeName);
console.log(anotherName);

let userOne={
    userName:"satyam",
    userId:12345,
}

let userTwo=userOne;

userTwo.userName="satyamSri";

console.log(userOne.userName);
console.log(userTwo.userName);