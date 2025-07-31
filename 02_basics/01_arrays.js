// const arry = [0, 1, 2, 3, 4, 5, "satyam", true, "bekar value"];
// console.log(arry); // This prints only arry

let newArry = [0, 1, 2, 3, 4, 5, "satyam", true, "bekar value"];
// newArry.push(12);  // This adds 12 to newArry
// newArry.pop() //deleting value from last
// newArry.unshift("new hai") //adding value in starting 
// newArry.shift() //eleminating value from starting

// console.log(newArry); // ✅ This will show the updated array
// console.log(newArry.includes(9))
// console.log(newArry.indexOf(4))

// const newnewArry= newArry.join();
// console.log(newArry)
// console.log(newnewArry);

console.log('A',newArry)
let myN1=newArry.slice(1,3);//dont change in main arry only get the values 
console.log(myN1)
console.log('B',newArry)
let myN2=newArry.splice(1,3);//it changes in the main arry
console.log(myN2)
console.log('C',newArry)







