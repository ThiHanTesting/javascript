// oop example

class Calculator {

    static PI = 3.14

    plus(n1,n2){
        return n1+n2 
    }
    mins(n1,n2){
        return n1-n2 
    }
    multiply(n1,n2){
        return n1*n2 
    }
    division(n1,n2){
        return n1/n2 
    }
    remainder(n1,n2){
        return n1%n2 
    }

}


// let calculator = new Calculator
// console.log(calculator.plus(1,2))
// console.log(calculator.multiply(2,2));
// console.log(calculator.PI)


// instead of that 
console.log(Calculator.PI)
console.log(Math.PI);