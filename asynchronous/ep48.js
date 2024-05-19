// asynchronous js

// sync way ( do one job after another one do not overlap)
// console.log('1');
// console.log('2');

// async way 
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 3000);
console.log(4);