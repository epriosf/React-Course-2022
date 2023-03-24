//Array Destructuring
const numbers = [1,2,3];
const [num1, ,num3]= numbers;
console.log(num1,num3); // 1, 3

// Object Destructuring
const person={
    name: 'Paul',
    age: 29
};
const {name}= person;
console.log(name) //Paul