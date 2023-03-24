// Primitive types
const number =1;
const num2= number;
console.log(num2); //1

//References Types (Objects && Arrays)
const person ={
    name: 'Paul'
}
const secondPerson= person; //The pointer will be copied
person.name= 'Manu';
console.log(secondPerson); // [object Object] {name: 'Manu'}


// Immutable Way to copy an object to another
const person ={
    name: 'Paul'
}
const secondPerson ={
    ...person
}

person.name= 'Manu';
console.log(secondPerson); // [object Object] {name: 'Paul'}