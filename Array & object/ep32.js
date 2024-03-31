// JSON ''
// JSON = javascript Object Notation


// these are things json accepts
// String ""
// number 
// boolean 
// Array
// object 
// null


let person = '{"name" : "khun thi han","age":"20"}'
console.log(JSON.parse(person))

let person2 = {
    name : 'thi han',
    age : 20 
}
console.log(JSON.stringify(person2))