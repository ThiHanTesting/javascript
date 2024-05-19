// fetch api

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// asynchronous
async function fetchTodos() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log('hi');
        let data = await response.json()
        console.log(data);
        // let data = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
        // console.log(data);  
    } catch (error) {
        console.log(error);
    }
}
fetchTodos()