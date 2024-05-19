// promise

// function synchronous() {
//     let result = 0
//     for (let i = 0; i < 1000000000; i++) {
//         result += i
//     }
//     return result
// }
// console.log('work');
// console.log(synchronous());
// console.log('important work');

function asynchronous() {
    return new Promise((resolve, reject) => {
        let result = 0
        for (let i = 0; i < 1000000000; i++) {
            result += i + undefined
        }
        if (result) {
            resolve(result)
        } else {
            reject('i have got some error')
        }

    })
}

console.log('work');

// asycchornous function 
asynchronous()
    .then((result) => {    // then() return the result form the resolve()
        console.log(result);
        console.log('after async task');
    })
    .catch((error) => {   // catch() return the result from the reject()
        console.log(error);
    })

console.log('important work');