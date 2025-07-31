// let date=new Date();

// console.log(date)

// let myDate=new Date('2025-07-31')
// console.log(myDate.toString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())

let myCreatedDate= new Date(2025,0,12);
console.log(myCreatedDate.toDateString())

let myTimeStamp=Date.now();
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

console.log(myCreatedDate.getMonth()+1)

console.log(myCreatedDate.toLocaleString("default",{weekday:"long"}))
