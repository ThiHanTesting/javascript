// array filter method

let nums = [1,2,3,4,5,6,7,8,9]

let newArr = nums.filter((num)=>{
    return num%2 === 0
})
console.log(newArr)