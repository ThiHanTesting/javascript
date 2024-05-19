// static method and main concept
// u can't use this keyword in static method


class Calculator {
    PI = 3.14
    Name = 'thi han'
    area (r){
       // let cal = new Calculator()
       // return cal.PI*r**2 // r square
       return this.PI*r**2
   }
   volume(r,h){
       return this.area(r)*h
   }
   static info(){
    let cal =  new Calculator()
    console.log('i am '+ cal.Name+' ')  // i am undefined
   }
}

let cal = new Calculator()
console.log(cal.PI);
console.log(cal.area(2));
console.log(cal.volume(2,3))