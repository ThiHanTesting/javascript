// oop (inheritance)

class Animal {
    // default is public age = 1
    #age = 1    // private can only be used in this class not even the children
    constructor(name) {
        this.Name = name
    }
    run() {
        console.log(`${this.Name} is running `);
    }
}

class Dog extends Animal {

    bark() {
        // console.log(this.Name , this.#age , 'woof woof ');
        console.log(this.Name  , 'woof woof ');
    }
}

let dog = new Dog('Aung nak')
dog.bark()


