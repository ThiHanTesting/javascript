// OOP (access modifier) 

// (static ,public, private , protected )
//  but there is no protected in js
// private #

class Car {
     Name = 'marcedes'
     #hp = '400'  // private field so u can't use that outside of the class
    getHorsePower(){
        console.log(this.#hp);
    }
}

let car = new Car()
car.Name = 'gdsfadsf'
console.log(car.Name);
// console.log(car.#hp); can't call hp here 
car.getHorsePower()