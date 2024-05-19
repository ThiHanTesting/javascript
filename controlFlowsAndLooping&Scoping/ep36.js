// swithc operator
let people = [
    { name: 'jo', age: 25 },
    { name: 'safd', age: 25, gender: 'f' },
    { name: 'asdf', age: 25, gender: 'm' }
]

people = people.map(person => {
    switch(person.gender){
        case 'm' : person.gender = 'male' ; break;
        case 'f' : person.gender = 'female' ; break;

        default : person.gender = 'unknown' ; break;
    }
    return person
})

console.log(people);