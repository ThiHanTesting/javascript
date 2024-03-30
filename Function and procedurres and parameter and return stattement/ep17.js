// call back function part 2

function twice(num , modifier) {
   
    let result =  modifier(num)* 2
    console.log(result)
}

twice(5 , function(num){
    return num+5
})