function add(a,b = 0 ){ // b's default value is 0
    // console.log(a)
    // console.log(b)
    // console.log(a+b)
}
add(4)
add(5,1)



/// Rest Parameter

function test(a,b,...c){
    console.log(a)
    console.log(b)
    console.log(c)
}
test(1,2,3,4,5)
