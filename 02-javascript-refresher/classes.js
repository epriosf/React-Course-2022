class Human{
    constructor() {
        this.gender='Male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name='Max';
        this.gender='Female';
    }
    printMyName(){
        console.log(this.name);
    }
}
const person= new Person();
person.printMyName(); //Max
person.printGender(); //Female

//ES6 Classes, properties & methods
class Human {
    gender='Male';
    printGender=()=> console.log(this.gender);
}
class Person extends Human {
    name='Max';
    gender='Female';
    printMyName=()=> console.log(this.name);
}
const person= new Person();
person.printMyName(); //Max
person.printGender(); //Female
