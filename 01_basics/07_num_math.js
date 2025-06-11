// +++ ###############################  Number  ##############################

const number=400;

// console.log(number);

const number1=new Number(400);
// console.log(number1);

// console.log(number1.toString().length);
// console.log(number1.toFixed(3));

const otherNumber=123.678;

// console.log(otherNumber.toPrecision(2));;

const hundred=10000000;
// console.log(hundred.toLocaleString('en-IN'));


// +++###########################################  Math  ##########################

// console.log(Math);
// console.log(Math.abs(-40));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));
console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

const max=20;
const min=10;

console.log(Math.floor(Math.random()*(max-min+1)+min));
