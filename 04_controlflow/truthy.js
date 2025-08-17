const userEmail="";

if (userEmail){
    console.log("Got user Email")
}else{
    console.log("Don't have user Email")
}

// false value

// false,null,undefined,NaN,"",0,-0

// true value

// true," ","0","false",[],{},function(){}

if (userEmail.length===0){
    console.log("arry is empty")
}

const emptyObj={ }

if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1=5 ?? 10;
val2=null ?? 10;
val3=undefined ?? 15;

console.log(val1)
console.log(val2)
console.log(val3)

// terniary operator

// condition ? true : false

const price =100;
price <=80 ? console.log("price is less than 80"): console.log("price is greater than 80")