// Primitive

// 7 types: string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456987123654789n




// Reference type (Non primitive)

// Array, objects, functions

const heros = ["shaktiman", "naagraj",]
let myObj = {
    name: "jyoti",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof heros);

// the typeof operator
//link for study: https://262.ecma-international.org/
