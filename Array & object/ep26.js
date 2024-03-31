// array methods 
let nums = [1,2,3,4,5,6]

// map
let newArr = nums.map( num => num+100 )
console.log(newArr)

// filter 
let filterNumbers = nums.filter(num=> num%2 === 0)
console.log(filterNumbers)

// reduce 
let result = nums.reduce((prev , current)=> prev + current)
console.log(result)