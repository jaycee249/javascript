//  log out into the consel a string that says "hello world"
// console.log("Hello World!");

// DAY 2 VARIABLES and CONSOLES.log

// var myName="Jasmine";
// var myAge= 22;
const myName="Jasmine";
let myAge= 24;
// log out into the console myName and myAge the ES5 way
// console.log(" Hello "+ myName+ "! You are " + " years old. ");

// log out into the console myName and myAge ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old.`);

// DAY 2 - DATE
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
// console.log(today);
//  CONSOLE ES5 WAY
// console.log(day, month, year, hour);

// CONSOLE THE ES6 way
console.log(`${month}/${day}/${year}`)


// Day 2 -- MATH
// gets random number between 0 and 1
// const rand = Math.random();
// Give us a number, then multiply it by ten.
// Nes add 1 so we cannot get 0. Finally round down the number.
const rand = Math.floor((Math.random() *10) +1);
// console.log(rand);

// simple pop up
// alert(rand);

// user clicks to cancel or okay
// confirm(rand);

// accepts a users input alerts the name.
// prompt(rand);
let name = prompt("Please enter your first name.");
let lastName = prompt("Please enter your last name.");
console.log(name);
alert(lastName);
var date = prompt("What is your Date Of Birth?");
if (window.confirm("Is this your Date Of Birth? " + date));
// let name = prompt('Please enter last name.')
