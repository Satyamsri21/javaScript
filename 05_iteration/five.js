const coding =["js","python","ruby","java","C++"]

coding.forEach(function (val) {
    console.log(val)
    
})

coding.forEach((item)=>{
    console.log(item)
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const mycoding=[
    {
        languagename:"javascript",
        languagefile:"js"
    },
    {
        languagename:"java",
        languagefile:"java"
    },
    {
        languagename:"python",
        languagefile:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename)
})

