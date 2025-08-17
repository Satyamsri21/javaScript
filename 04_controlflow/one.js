// if

const temperature = 40;

if (temperature ===35){
    console.log("temperature is 35")
}
else (console.log("temperature is not 35") );

const score=200;

if (score >100){
    const power="fly"
    console.log(`user power: ${power}`)
}

// console.log(`user power: ${power}`)

const balance =800;

if(balance<500){
    console.log("balance is less than 500")
}else if (balance <700){
    console.log("balance is less than 700")
}else if (balance <1000){
    console.log("balance is less than 1000")
}else {
    console.log("balance is not proper")
}


const userLoggedIn=true;
const debitcard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if (userLoggedIn && debitcard){
    console.log("allowed to buy")
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}