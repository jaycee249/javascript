//  log out into the consel a string that says "hello world"
// console.log("Hello World!");

// DAY 2 VARIABLES and CONSOLES.log

// var myName="Jasmine";
// var myAge= 22;
// const myName="Jasmine";
// let myAge= 24;
// log out into the console myName and myAge the ES5 way
// console.log(" Hello "+ myName+ "! You are " + " years old. ");

// log out into the console myName and myAge ES6 way
// console.log(`Hello, ${myName}! You are ${myAge} years old.`);

// DAY 2 - DATE
// const today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let hour = today.getHours();
// console.log(today);
//  CONSOLE ES5 WAY
// console.log(day, month, year, hour);

// CONSOLE THE ES6 way
// console.log(`${month}/${day}/${year}`)


// Day 2 -- MATH
// NOTE!
// gets random number between 0 and 1
// const rand = Math.random();
// Give us a number, then multiply it by ten.
// Nes add 1 so we cannot get 0. Finally round down the number.
// const rand = Math.floor((Math.random() *10) +1);
// console.log(rand);

// simple pop up
// alert(rand);

// NOTE!
// user clicks to cancel or okay
// confirm(rand);

// accepts a users input alerts the name.
// prompt(rand);
// let name = prompt("Please enter your first name.");
// let lastName = prompt("Please enter your last name.");
// console.log(name);
// alert(lastName);
// var date = prompt("What is your Date Of Birth?");
// if (window.confirm("Is this your Date Of Birth? " + date));
// let name = prompt('Please enter last name.')

// DAY 3 EXCERSIZES
// NOTE!!
//  === strict comparison
//  == loose comparison
//  ! not TRUE
// !== stict not comparison
//  != loose not comparison
//  > greater than
// < Less than
// >= greater than or equal
// <= less than or equal to

// const myNumber = '1';
// const userInput = prompt("Please enter a numbre: ");
// if (1 == userInput) {
  // console.log("I am here");
  // console.log(!true); (NOT TRUE)

// } else {
  // console.log ("In the else")
// }

//  DAY 3 LOGICAL OPERATORS
// const userInput= prompt('Please enter a number:');
// if (userInput == 1 || userInput == 5 || userInput == 15) {
//   console.log('I am here');
// } else{
//   console.log ('In the else')
// }

// if (userInput > 5 && userInput < 10){
//   console.log ('I am here');
// } else {
//   console.log ('In the else.');
// }

//  DAY 3 -- ELSE IF
// if (userInput > 5) {
//   console.log ('Number is greater than five');
// } else if (userInput < 5){
//   console.log ('Number is less than five');
// } else if (userInput === '5'){
//   console.log ('User entered a five')
// } else if (userInput == '' || userInput == null){
//   console.log ('User input nothing');
// } else {
//   console.log ('User did not enter a number');
// }

//  DAY 3 -- switch

// const today = new Date().getDay();
// console.log(today);
// switch (today) {
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Satursday');
//     break;
// }

//  DAY 3 -- MATH
// const myNumber = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3;
// console.log(addition);


// let myNum = 1;
// INCREMENT (NOTE)
// myNum++;
// DECREMENT (NOTE)
// myNum--;
// myNum = myNumb + 3; (WRONG) (reassigning variable)
// (CORRECT) (maniplulating variable)
// myNum +=3;
// myNum -=10;
// myNum *=5;
// myNum /=12;


// console.log(myNum);


// DAY 3 TAKE HOME/ HOMEWORK!
// const userInput = prompt('Please enter a first name:');
// let color = prompt ('Which of these colors is your favorite?: Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, Grey, None.');
// console.log(name, color);
// switch (color) {
//   case 0:
//     console.log('red')
//     break;
//   case 1:
//     console.log('orange')
//     break;
//   case 2:
//     console.log('yellow')
//     break;
//   case 3:
//     console.log('green')
//     break;
//   case 4:
//     console.log('blue')
//     break;
//   case 5:
//     console.log('pink');
//     break;
//   case 6:
//     console.log('purple')
//     break;
//   case 7:
//     console.log('black')
//     break;
//   case 8:
//     console.log('white')
//     break;
//   case 9:
//     console.log('grey')
//     break;
//   case 10:
//     console.log('none')
//     break;
// }



 // DAY ----- 4 --- ARRAYS AND LOOPS
// let myArray = ['Red', 'Blue', 'Green', 'Purple' , 'Black','Gray' , 'White'];
// let red = myArray[0];
// console.log (myArray[1]);
// console.log(myArray. length);
// let about = ['Jasmine' , 24 , 'Grass is green.' , true];
// console.log(about);
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(nums));
// nums.push(10, 11, 12); (NOTE pushes information to the end of the array)
// nums.unshift(0); (NOTE pushes information at the begining of the array)
// nums.pop(); (NOTE pops/ erases off the last entry of imformation)
// nums.shift(); (NOTE removes the first item of the array)
// nums.splice(1, 4); (NOTE first number selects the index (where it stops) and the second number selects how many it skips/ removes)
// let slice = nums.slice(3, 6); (NOTE first number copies from that place over until the endn of the indes. second number give it an end spot)
// let color= myArray.indexOf('Green'); (NOTE it goes into the array and it pulls out the value asked for)
// console.log(myArray[color]); (NOTE it logs and askes for the value being asked in the above)
// console.log(myArray.indexOf('Green'));
// console.log(nums);
// console.log(slice);

// console.log(myArray.sort(). reverse());

// let lastIndex = myArray.lastIndexOf('Red'); (NOTE this will tell you the place of the double or dewplicates of the item)
// console.log(lastIndex);

// let color = myArray.indexOf('Green');
// myArray.splice(color, 1);
// console.log(myArray);

// DAY 4 ------ LOOPS
let num = 0;
// while (num < 10) {
  // console.log(num);
  // num++;
  // console.log(num);
// }

// for (let i = 0; i < 10; i++){
//   console.log('I have ran');
// }

// do {
//   num++;
//   console.log(num);
// } while(num < 10);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray [i]);
// }

// console.log(num);


// let myFavoriteMovies = [];
// let firstFavorite = ['Alien', '1979'];
// let secondFavorite = ['predator', '1987'];
// let thirdFavorite = ['A Clockwork Orange', '1971'];
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// console.log(myFavoriteMovies[2][1]);
// let movieYears = [];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
// for (var i = 0; i < myFavoriteMovies.length; i++) {
//   movieYears.push(myFavoriteMovies[i][1])
// }
// console.log(movieYears);


// TODO: take home day 4
let todos=[];
let todo1 = prompt("Hey there, what you doing?" , "Eat cheese.");
let todo2 = prompt("Hey there, what you doing?" , "Eat cheese.");
let todo3 = prompt("Hey there, what you doing?" , "Eat cheese.");


let todoOneArray = [todo1];
let todoTwoArray = [todo2];
let todoThreeArray = [todo3];

todo.push(todoOneArray, todoTwoArray, todoThreeArray);

for(let i = 0; i < todos.length; i++){
  let timeframe = prompt(`How long should ${todos [i][0]} take? (Please provide in days)`, "1");
  let transformed = parseInt(timeframe);
  if(!isNan(parseInt(timeframe)){
    todo[i].push(transformed);
} else {
  todos[i].push(1);
  // edge casing: catching potential erros for your user.
  };
}
let n = 0;
let max = 0;
while(n < todo.length) {
  if(max < todo[n][1]) {
    max = todos [n][1];
  }
  n++;
};
let m=0;
do {
  if(todos[m][1] === max){
    console.log(todo[m]);
  } else {
    todo[m].push ("easey-peasy");
    alert(todos[m]);
  }
  m++;
} while(m < todo.length);

// This is how you evaluate if something is NOT a number.
// console.log(parseInt("hello world"));
// isNan();
