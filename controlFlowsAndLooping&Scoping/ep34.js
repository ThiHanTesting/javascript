// if else exxamples

let people = [
    { name: 'jo', age: 25 },
    { name: 'safd', age: 25, gender: 'f' },
    { name: 'asdf', age: 25, gender: 'm' }
]

people = people.map(person => {
    if (person.gender) {
        if (person.gender === 'm') person.gender = 'male'
        else if (person.gender === 'f') person.gender = 'female'
    } else {
        person.gender = 'unknown'
    }
    return person
})
console.log(people);