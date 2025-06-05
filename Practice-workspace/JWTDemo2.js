const jwt = require("jsonwebtoken");

//decode, verify, generate.

//generate
const value ={
    name:"Gagandeep",
    accountNumber: 123123123
}
 
const token = jwt.sign(value, "secret");

console.log("token is: "+ token);
/*since this token has been generated using the secret password, it can 
only be verified using this secret password.*/

//verification
const verifiedValue = jwt.verify(token, "secret");
console.log(verifiedValue)
