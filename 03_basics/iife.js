// IFFE immediately invoked funcation expression

function user(){
    console.log("db connected")

}
user();

(function user(name){
    console.log(`db connected again ${name}`)

})("satyam");

((name)=>{
    console.log(`db connected again and again ${name}`)
})("srivastava")

