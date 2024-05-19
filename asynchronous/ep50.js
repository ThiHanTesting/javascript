// fetch api 



// too many catch() method
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data)
//         }).catch((error) => {
//             console.log(error);
//         })
//     }).catch((err) => {
//         console.log(err);
//     })


let userInput = prompt('Tell me user id ? ')
fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})