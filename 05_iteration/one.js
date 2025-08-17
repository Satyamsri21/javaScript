// for 

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
}


for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 detected ")
        
    }
    console.log(element)
}

for (let i = 1; i <=10; i++) {
    console.log(`value of ${i}`)
    for (let j = 1; j <=10; j++) {
        // console.log(`value of i ${i} and value of j ${j}`)
        console.log(i + '*' + j + ' = ' + i*j)
    }
    
}

let myArray=["sayam","gyan","sandeep"];
console.log(myArray.length)

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}

// break and continue

for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("value 5 detected")
        break
    }
    console.log(i)
}


for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("value 5 detected")
        continue
    }
    let element=i
    console.log(element)
}
