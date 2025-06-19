//basic data type : number, string, boolean, null, undefined

function greet(name: string){
    console.log("Hello "+ name)
}
greet("Gagandeep");

//:number after function parameters defines that it explicitely returns number. 
//even if not explicitely mentioned, typescript relies on type inference to automatically detect the return type. 
function sum(a: number, b: number): number{
    return a+b;
}
console.log(sum(5,3));

function isLegal(age: number): boolean{
    return (age>=18);
}
console.log(isLegal(17))

//when giving out a function as argument we can still mention the return type of the argument function. 
function runAfter1S(fn: ()=> void){
    setTimeout(fn, 1000);
}

runAfter1S(function(){
    console.log("Hi there");
})

//Interfaces
interface User {
    firstName: string,
    lastName: string,
    email?: string, //put ? for an optional attribute.
    age: number
}

function isOfLegalAge(user: User){
    return (user.age>=18)?user.firstName + " is legal":user.firstName + " is Not legal age" ;
}
console.log(isOfLegalAge({
    firstName: "Gagandeep",
    lastName: "singh",
    age: 25
}))

//Implementing interfaces.
interface Person{
    name: string;
    age: number;
    greet(phrase:string): void;
}

class Employee implements Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}` );
    }
}

//Types
//very similar to interfaces, let you aggregate data together. 
type UserType = {
    firstName: string;
    lastName: string;
    age: number;
}

//Union 
type num = string | number;

function printNum(id: num){
    return id;
}

console.log(printNum(1));
console.log(printNum("2"));

//Intersection
type EmployeeType = {
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
}

type Techlead = EmployeeType & Manager;
const t: Techlead = {
    name: "Gagandeep",
    startDate: new Date(),
    department: ""
}

//What is the difference between an interface and type. 


//Arrays
type NumberArr = number[]; 






