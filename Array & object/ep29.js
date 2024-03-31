// this 

// method => method's object
// regular fun => window
// arrow fun => parent's this (lexical scoping)


/// regular function 
let person = {
    name : 'johm',
    age : 20,
    eat() {
        setTimeout(function () {
            console.log(this)  // point to window
        },3000)
    } 
}
function test(){
    console.log(this)   // point to window 
}


console.log(this)  // point to window
let person2 = {
    name : 'thi hna',
    age : 20,
    eat : ()=> {
        // parent
        console.log(this)  // point to window 
        setTimeout(()=>{
            console.log(this)  // point to person2 object
        },3000)
    } ,
    test(){
        // parent
        console.log(this)  // point to person2 object
        setTimeout(()=>{
            // child
            console.log(this) // point like the parent
        })
    }
}
person2.eat()
person2.test()