// Example 1
// Normal function
// function printMyName(name){
//     console.log(name)
// }
// printMyName('Erick');

//Arrow function
//Form 1
const printMyName1=(name)=>{
console.log(name);
}
printMyName1('Erick');
//Form 2: Only 1 parameter
const printMyName2=name=> {
    console.log(name);
}
printMyName2('Paul');

//Form 3 with no parameters
const printMyName3=()=> {
    console.log('ErickP');
}
printMyName3();

// Example 2
// Form 1
const multiply = number=>{
    return number*2;
}
console.log(multiply(2));
//Form 2
const multiply2 = number => number*2;
console.log(multiply2(2));