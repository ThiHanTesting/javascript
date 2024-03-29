// callback function
 function sayMyName(name , fun){
    let greeting = fun(name)  // this is a callback function
    console.log(greeting)
    console.log(name)
 }

 
 sayMyName('james' , function(name){
    return name ;
})



