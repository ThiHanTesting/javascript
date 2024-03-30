// spread operator (...)

let data1 = [1,2,3]
let data2 = [4,5,6]
result = [...data1,...data2]

console.log(result)


add = (a,b) => console.log(a+b)
let nums = [1,2]
add(...nums)

// destructuring
let data = ['mgmg',20,'TGI']
// let name = data[0]
// let age = data[1]
// let address = data[2]
let [name , age , address ] = data 
console.log(name , age , address)

minus = ([a,b])=> console.log(a-b)

minus([3,1])