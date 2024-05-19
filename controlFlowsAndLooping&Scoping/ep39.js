// for-of and for-in


let people = ['mg mg', 'hell', 'no', 'job', 'lol ', 'sfd']

// for-of 
for( p of people ) console.log(p);




// for-in  loop the object

let person = {
  
        name: 'khun thi han',
        age: 20,
        gender: 'male'
   
}

for ( key in  person ) console.log(` ${key} is ${person[key]}`);


// for in with array
// let people = ['mgmg' , 'dsf' , 'sdfsdf']

// for ( key in people ) console.log(people[key])