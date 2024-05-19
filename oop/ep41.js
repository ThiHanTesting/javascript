// oop 

//class is kind of blue print

class Car {
    wheels = 4
    color = 'black'

    drive() {
        console.log('driving')
    }
}

let car = new Car
car.color = 'blue'
console.log(car.color);

let carTow = new Car
console.log(carTow.color)
