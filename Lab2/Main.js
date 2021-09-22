
let getDayOfTheWeek = require("./lab2").getDayOfTheWeek;
let makeCalender = require("./lab2").makeCalender ;
const readline = require("readline-sync");

let year = readline.question("Enter a year ####:");
let month = readline.question("Enter a Month Name:");
let day = parseInt(readline.question("Enter a day ##:"));


console.log("The day is " + getDayOfTheWeek(day, month, year)+".");
makeCalender();
