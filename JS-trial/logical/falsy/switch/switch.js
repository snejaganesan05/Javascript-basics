// IMPLICIT

// let A="EXECUTION";
// let B=350;
// let addition=A+B;
// console.log(addition);

// let ABC="VALUES";
// let DEF="1234";
// let answer=ABC*DEF
// console.log(answer)

// // EXPLICIT
// let m="content";
// console.log(typeof m);
// let num=Number(m)
// console.log(typeof num)

// let z=true;
// console.log(typeof z);
// z=String(z);
// console.log(typeof z);

// SWITCH

// Convert a given number (1-7) to the corresponding day of the week:
// Given a number from 1 to 7, return the corresponding day of the week (e.g., 1 for Monday, 2 for Tuesday, etc.).

let number = 4;
switch (number) {
  case 1:
    day = "Sunday";

    break;
  case 2:
    day = "Monday";

    break;
  case 3:
    day = "Tuesday";

    break;
  case 4:
    day = "Wednesday";

    break;
  case 5:
    day = "thursday";

    break;
  case 6:
    day = "friday";

    break;
  case 7:
    day = "Saturday";

    break;

  default:
    day = "Not part of the week";
}
console.log(day);
// using if

let NUMBER = 4;
if (NUMBER == 1) {
  console.log("SUNDAY");
} else if (NUMBER == 2) {
  console.log("MONDAY");
} else if (NUMBER == 3) {
  console.log("TUESDAY");
} else if (NUMBER == 4) {
  console.log("WEDNESDAY");
} else if (NUMBER == 5) {
  console.log("THURSDAY");
} else if (NUMBER == 6) {
  console.log("FRIDAY");
} else if (NUMBER == 7) {
  console.log("SATURDAY");
} else "not part of the week";

// Convert a given number (1-12) to the corresponding month:
// Given a number from 1 to 12, return the corresponding month (e.g., 1 for January, 2 for February, etc.).

let value = 7;
switch (value) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "june";
    break;
  case 7:
    month = "july";
    break;
  case 8:
    month = "August";

    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    month = "not past of the month";
}
console.log(month);

// if conditionals

let values = 7;
if (value == 1) {
  console.log("January");
} else if (value == 2) {
  console.log("February");
} else if (value == 3) {
  console.log("March");
} else if (value == 4) {
  console.log("April");
} else if (value == 5) {
  console.log("May");
} else if (value == 6) {
  console.log("June");
} else if (value == 7) {
  console.log("July");
} else if (value == 8) {
  console.log("August");
} else if (value == 9) {
  console.log("September");
} else if (value == 10) {
  console.log("October");
} else if (value == 11) {
  console.log("November");
} else if (value == 12) {
  console.log("December");
} else {
  console.log("not pasrt of the month");
}

// Convert a given grade (A-F) to a description:
// Given a grade (A-F), return a description such as "Excellent" for A, "Good" for B, etc.
// Identify the traffic light action based on color:

let grade = "C";
switch (grade) {
  case "A":
    description = "Excellent";
    break;
  case "B":
    description = "Very good";
    break;
  case "C":
    description = "good";
    break;
  case "D":
    description = "average";
    break;
  case "E":
    description = "below average";
    break;
  case "F":
    description = "fail";
    break;
  default:
    description = "no break";
}

console.log(description);

// IF Conditional

let grades = "c";

if (grades == "a") {
  console.log("Excellent");
} else if (grades == "b") {
  console.log("Very Good");
} else if (grades == "c") {
  console.log("Good");
} else if (grades == "d") {
  console.log("average");
} else if (grades == "e") {
  console.log("below average");
} else {
  console.log("fail");
}

// Determine the type of a meal based on the time of day:
// Given the time of day (morning, afternoon, evening), return the type of meal (breakfast, lunch, dinner).

let time = "afternoon";
switch (time) {
  case "morning":
    meal = "breakfast";
    break;
  case "afternoon":
    meal = "lunch";
    break;
  case "night":
    meal = "dinner";
}
console.log(meal);

// if conditionals
let times = "afternoon";
if (times == "morning") {
  console.log("breakfast");
} else if (times == "afternoon") {
  console.log("lunch");
} else if (times == "night") {
  console.log("dinner");
}

// Convert a given digit (0-9) to its word form:
// Given a digit from 0 to 9, return the word form (e.g., 0 for "Zero", 1 for "One", etc.).

const userType = "admin"
let digit = 5;
switch (digit) {
  case 1:
    word = "one";
    break;
  case 2:
    word = "two";
    break;
  case 3:
    word = "three";
    break;
  case 4:
    word = "four";
    break;
  case 5:
    word = "five";
    break;
  case 6:
    word = "six";
    break;
  case 7:
    word = "seven";
    break;
  case 8:
    word = "eight";
    break;
  case 9:
    word = "nine";
  default:
    "not an number";
}
console.log(word);

// if conditionals

let digits = 8;
if (digits == 1) {
  console.log("one");
} else if (digits == 2) {
  console.log("two");
} else if (digits == 3) {
  console.log("three");
} else if (digits == 4) {
  console.log("four");
} else if (digits == 5) {
  console.log("five");
} else if (digits == 6) {
  console.log("six");
} else if (digits == 7) {
  console.log("seven");
} else if (digits == 8) {
  console.log("eight");
} else if (digits == 9) {
  console.log("nine");
} else {
  console.log("not a number");
}
