const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNumber.map((num)=>{
//     return num>5

// })
// console.log(newNums)

const newNumss= myNumber
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=> num>50)
console.log(newNumss)
