// array
let mixture2 = new Array('dog' , 20 , 1.5 , true) // old style
let mixture = ['dog' , 20 , 1.5 , true]

mixture[4] = 'cat'
mixture[3] = false
console.log(mixture)


let fruits = ['apple' , 'orange' ]
fruits[2] =  'banana'
console.log(fruits[fruits.length-1])


// nested array
let arr = [
    ['a','b','c','d'],
    [1,2,3]
]
console.log(arr[0][3])