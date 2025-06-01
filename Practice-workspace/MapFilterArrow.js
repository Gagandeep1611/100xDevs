//arrow function

//Normal function
function sum(a,b) {
    return a+b;
}

//array function
const sum1 = (a,b) => a+b;

//map 
//given an array double each element and return the array. 
const input = [1, 2, 3, 4, 5, 6, 7,];

//either this
function transform(i){
    return i*2;
}
const ans = input.map(transform);
console.log(ans);

//OR
const ans2 = input.map((a) => a*2);
console.log(ans2);
 
//Filter
//given the input array, give back all the even values from it. 

const ans3 = input.filter((a)=> (a%2==0)?true:false);
console.log(ans3);

