// js data structure

// let person = {
//     name : 'khun thi han',
//     age : 20 ,
//     gender : 'male'
// }


// js developer use this way to store a lot of data
let people = [
    {
        name: 'khun thi han',
        age: 20,
        gender: 'male'
    },
    {
        name: 'su su',
        age: 19,
        gender: 'female'
    },
    {
        name: 'zaw zaw',
        age: 18,
        gender: 'binary'
    }
]

// using map method to get all username
let allUserName = people.map((person) => {
    if (person.gender === 'male') return "Mrs." + person.name
    else if (person.gender == 'female') return 'Ms.' + person.name
    else return person.name
})

let searchKeyword = prompt('search person : ')

// using filter mehtod to filter all male
let allMaleUser = people.filter((person) => {
    //return person.gender === 'male'
    // return person.age === 20
    return person.name.includes(searchKeyword)
})



