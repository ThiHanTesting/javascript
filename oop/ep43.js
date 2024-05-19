// OOP Example
// static method and this keyword in classes

class Calculator {
     PI = 3.14
     area (r){
        // let cal = new Calculator()
        // return cal.PI*r**2 // r square
        return this.PI*r**2
    }
    volume(r,h){
        return this.area(r)*h
    }
}

let cal = new Calculator()
console.log(cal.PI);
console.log(cal.area(2));
console.log(cal.volume(2,3))