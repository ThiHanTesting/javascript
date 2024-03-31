// object spread and object destructing and property shorthand



// object spread
let obj1 = {
    myName: 'thihan',
    myAge: 20
}
let obj2 = {
    myHairColor: 'black'
}
let obj3 = { ...obj1, ...obj2 }


// object destructing 
let { nam, ge } = {
    nam: 'khun thi han',
    ge: 20
}

// property shorthand
let name = 'khun thi han '
let age = 22
let person = {
    name,  // name : name 
    age     // age : age
}