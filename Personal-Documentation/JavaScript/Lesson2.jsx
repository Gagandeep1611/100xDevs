//Strings 
//Callbacks
//Json and objects
//map ,arrow fns, filter


let sentence = "Hi my name name is Gagandeep Singh";

function printStr(str){
    console.log(str);
}

printStr(sentence.indexOf("name"));
printStr(sentence.lastIndexOf("name"));
printStr(sentence.slice(19, sentence.length));
//in slice first index is inclusuve and last index is not.
printStr(sentence.replace("Gagandeep", "Ramandeep"))
console.log(sentence.split(" "))
//trim is used to trim out spaces. 
printStr(parseInt("24irvnsiunsd"));

//Arrays
let arr = [1,2,3];
arr.push(3); //puts element at the end
arr.pop(2); //deletes from end
arr.shift(); //shifts array to left;
arr.unshift(4); //puts something on the front.

arr.forEach(printStr); //for each will send each element one by one to the function we put.


//Json and objects

const user = {
    name: "Gagandeep",
    age: "24"
} 

const finalString = JSON.stringify(user);
console.log(finalString)  //JSON TO STRING

const strUser = `{"name":"Gagandeep","age":"24"}`;
const strFinal = JSON.parse(strUser); //STRING TO JSON
console.log(strFinal)


//map, filter, arrow fns

//Arrow functions
const sum = (num1, num2) => num1 + num2;
console.log(sum(5,6));

//Map
const array = [1,2,3,4,5,6,7,8,9,10];

const ans = array.map((a)=> a*2);
console.log(ans);

//Filter

const evenNums = array.filter((a)=> a%2==0);
console.log(evenNums);