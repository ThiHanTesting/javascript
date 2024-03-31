let person = {
    name : 'johm',
    age : 20,
    eat() {console.log(person.name+' is eating')}
}

// dot notation .
console.log(person.name)
// bracket notation []
console.log(person['age'])

// overwirte
person.name = 'john doe'
console.log(person.name)


// function in method
person.eat()

// add new property
person.hairColor = 'white'
console.log(person.hairColor)
// add mew function
person.drink = function() {console.log('person is drinking')}
person.drink() 