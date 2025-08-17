const myNum=[1,2,3,4]

// const myTotal= myNum.reduce((acc,currval)=>{
//     console.log(`acc value ${acc} currval is ${currval}`)
//     return acc+currval
// },0)

const myTotal=myNum.reduce((acc,currval)=>acc+currval,0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice= shoppingCart.reduce((acc,curr)=>acc+curr.price,0)

console.log(totalPrice)

