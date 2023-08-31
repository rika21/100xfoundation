// function creation
function sayHello(name) {
    console.log("Hello",name)
}

let myName = prompt("Enter your name")
sayHello(myName)

// math function
function someMathFunction(num1, num2) {
    return Math.abs(num1 - num2)
}

let num1 = prompt("Enter num1")
let num2 = prompt("Enter num2")
console.log(someMathFunction(num1, num2))

// declaring a constant
const birthYear = 1997
console.log("Birth Year ",birthYear)

// declaring an array
let favBooks = ["Almanack of Naval Ravikant", "Man's search for meaning", "Subtle art of not giving a f*ck"]
console.log("Fav Books ",favBooks)

// creating an object
let book = {
    title: "Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    publication_year: 2020
};
console.log("Title of my book: ",book.title)
console.log("Author of my book: ",book.author)
console.log("Publication year of my book: ",book.publication_year)

console.log(typeof(book))
