/*
## JWTs
 - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
 - To test, go to the 02-jwt folder and run `npx jest ./tests`
*/

const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtpassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({username},jwtpassword);
    return signature;
}

console.log(signJwt("gagandeepsingh@gmail.com","12344323434343434"))

function verifyJwt(token) {
    const decoded = jwt.decode(token);
    return decoded?true:false;
}

console.log(verifyJwt(signJwt("gagandeepsingh@gmail.com","12344323434343434")));

function decodeJwt(token) {
    try{
    const verify = jwt.verify(token, jwtpassword);
    return true;
    }catch(e){
        return false;
    }
    
}

console.log(decodeJwt(signJwt("gagandeepsingh@gmail.com","12344323434343434")));
console.log(decodeJwt("abcd"));