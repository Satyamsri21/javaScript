let a=100;

if (true){
    let a=10;
    const b=20;
    // console.log("inner :",a);
}

// console.log(a);
// console.log(b);

function one(){
    const username="satyam"
    function two(){
        const website="clenzy.org"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username="satyam";
    if(username==="satyam"){
        const website=" clenzy.org"
        console.log(username+ website)
    }
    // console.log(website)
}
// console.log(username)


// ====================================================================

console.log(addone(5))

function addone(num){
    return num+1
}


const addtwo=function addtwo(num){
    return num+2
}
console.log(addtwo(2))
