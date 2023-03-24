// Spread operator (...)

const numbers=[1,2,3];
const newNumbers= [...numbers, 4];
console.log(newNumbers); // [1,2,3,4];

//Objects
const person={
    name:'Paul'
};
const newPerson={
    ...person,
    age: 28
}
console.log(newPerson) // object {age: 28, name: 'Paul'}


//Rest operator
const filtering= (...args)=> args.filter(el => el===1);

console.log(filtering(1,2,3)); // [1]
