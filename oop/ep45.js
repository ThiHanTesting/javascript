// OOP (constructor & access modifier )

class Car {
    Name = ''
    Wheel = 4
    constructor(name , wheel) {
        this.Name = name
        this.Wheel = wheel
        this.drive()
    }
    drive() {
        console.log(this.Name + ' is driving')
    }
    getWheel(){
        console.log(this.Name+' has '+ this.Wheel +' wheels ');
    }
}

new Car('BMW',4)
let toyota = new Car('toyota',8)
toyota.getWheel()