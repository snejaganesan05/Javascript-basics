// let x=10;
// let y=150;
// let z=180;
// if(x<y && y<z ){
//     console.log('true')}
//     else{ console.log(false)}

//   let haveaccount=true;
//   if(haveaccount){
//     console.log('she have an account')
//   }
// else{console.log('not have anaccount')}
// Grade Assignment Create a variable named mark and assign a value between 0 to 100. Write an if-else statement to check the grade of the student:

// If mark is greater than 90, the grade is "A+".
// If mark is greater than 80, the grade is "A".
// If mark is greater than 70, the grade is "B".
// If mark is greater than 60, the grade is "C".
// Otherwise, the grade is "F".

let mark = 50;
let grade;
if (mark > 90) {
  grade = "A+";
} else if (mark > 80) {
  grade = "A";
} else if (mark > 70) {
  grade = "B";
} else if (mark > 60) {
  grade = "C";
} else {
  grade = "Failed";
}
console.log("Mark has scored " + mark + " with the grade " + grade);

// purchase
// Discount Calculation Create a variable named totalPurchase and assign a value. Write an if-else statement to calculate the discount based on the total purchase amount:

// If totalPurchase is greater than 2000, the discount is 20%.
// If totalPurchase is greater than 1000, the discount is 15%.
// If totalPurchase is greater than 500, the discount is 10%.
// Otherwise, the discount is 5%.

let totalPurchase = 1001;
let discount;
if (totalPurchase > 2000) {
  discount = "20%";
} else if (totalPurchase > 1000) {
  discount = "15%";
} else if (totalPurchase > 500) {
  discount - "10%";
} else {
  discount = "5%";
}

console.log(
  "The total purchase amount is " +
    totalPurchase +
    "and totsl discount id " +
    discount
);

// temparature classification
// Temperature Classification Create a variable named temperature and assign a value. Write an if-else statement to classify the climate based on the temperature:

// If temperature is greater than 40, the climate is "Very Hot".
// If temperature is greater than 30, the climate is "Hot".
// If temperature is greater than 20, the climate is "Warm".
// If temperature is greater than 10, the climate is "Cool".
// Otherwise, the climate is "Cold".

let temparature = 25;
let climate;
if (temparature > 40) {
  climate = "Very hot";
}
if (temparature > 30) {
  climate = " hot";
}

if (temparature > 20) {
  climate = "Warm";
}
if (temparature > 10) {
  climate = "Cool ";
} else climate = "cold";
console.log("The climate based on the temparature is " + climate);

// age group
// Age Group Classification Create a variable named age and assign a value. Write an if-else statement to classify the age group:

// If age is 60 or more, the age group is "Senior".
// If age is 40 or more, the age group is "Middle-aged".
// If age is 20 or more, the age group is "Adult".
// If age is 13 or more, the age group is "Teenager".
// Otherwise, the age group is "Child".

let age = 21;
let group;
if (age > 60) {
  group = "Senior";
}
if (age > 40) {
  group = "Middle Age";
}
if (age > 20) {
  group = "Adult";
}
if (age > 13) {
  group = "Teenager";
} else group = "child";
console.log(
  " The age of the individual is " + age + " and age group is" + group
);

// exam result
// Exam Result Create a variable named score and assign a value. Write an if-else statement to determine the exam result:

// If score is 90 or more, the result is "Excellent".
// If score is 75 or more, the result is "Good".
// If score is 50 or more, the result is "Pass".
// Otherwise, the result is "Fail".
let score = 75;
let examResult;
if (score >= 90) {
  examResult = "Excellent";
} else if (score >= 75) {
  examResult = "Good";
} else if (score >= 50) {
  examResult = "Pass";
} else examResult = "fail";
console.log(
  "student has scored " + score + " with the exam result " + examResult
);

// speed limit check
// Speed Limit Check Create a variable named speed and assign a value. Write an if-else statement to check the speed limit and give a message:

// If speed is greater than 100, the message is "Over Speeding - Hefty Fine".
// If speed is greater than 80, the message is "Over Speeding - Fine".
// If speed is greater than 60, the message is "Speed Limit".
// Otherwise, the message is "Safe Driving".

let speed = 120;
let speedLimitCheck;
if (speed > 100) {
  speedLimitCheck = "Over Speeding-Hefty Fine";
} else if (speed > 80) {
  speed;
  imitCheck = "Over Speeding-Fine";
} else if (speed >= 60) {
  examResult = " Speed Limit";
} else examResult = "Safe Driving";
console.log("Your speed is " + speed + " and fine is " + speedLimitCheck);

// membership tier
// Membership Tier Create a variable named points and assign a value. Write an if-else statement to determine the membership tier:

// If points are more than 3000, the tier is "Platinum".
// If points are more than 2000, the tier is "Gold".
// If points are more than 1000, the tier is "Silver".
// Otherwise, the tier is "Bronze".
let points = 2500;
let membershipTier;
if (points > 3000) {
  membershipTier = "Platinum";
} else if (points > 2000) {
  membershipTier = "Gold";
} else if (points > 100) {
  membershipTier = "Silver";
} else membershipTier = "bronze";
console.log(
  "Your points are " + points + " and your membership tier is " + membershipTier
);

// bmi
// Body Mass Index (BMI) Category Create a variable named bmi and assign a value. Write an if-else statement to classify the BMI category:

// If bmi is 30 or more, the category is "Obese".
// If bmi is 25 or more, the category is "Overweight".
// If bmi is 18.5 or more, the category is "Normal weight".
// Otherwise, the category is "Underweight".


let bmi = 18.5;
let category;
if (bmi >= 30) {
  category = "Obese";
} else if (bmi >= 25) {
  category = "Overweight";
} else if (bmi >= 18.5) {
  category = "Normal Weight ";
} else category = "Underweight";
console.log("Your bmi is" + bmi + " and your category is " + category);

// traffic light
// 9. Traffic Light Create a variable named lightColor and assign a value of either "red", "yellow", or "green". Write an if-else statement to determine the action based on the traffic light color:

// If lightColor is "red", the action is "Stop".
// If lightColor is "yellow", the action is "Slow down".
// If lightColor is "green", the action is "Go".
// Otherwise, the action is "Invalid color".
let lightColor = "yellow";
let action;
if ((lightColor =="red")) {
  action = "stop";
} else if ((lightColor == "yellow")) {
  action= "Slow down";
} else if ((lightColor == "green")) {
  action = "Go";
} else action == "Invalid action";
console.log("Light color is " + lightColor + " which means " + action);

// performace evaluation
// 10. Performance Evaluation Create a variable named sales and assign a value. Write an if-else statement to evaluate performance based on sales:

// If sales are more than 200, the evaluation is "Outstanding".
// If sales are more than 150, the evaluation is "Excellent".
// If sales are more than 100, the evaluation is "Good".
// If sales are more than 50, the evaluation is "Average".
// Otherwise, the evaluation is "Poor".

let sales=105;
let evaluation;
if(sales>200){
  evaluation="outstanding";
}else if(sales>150){
  evaluation="Excellent";
}else if(sales>100){
  evaluation="Good";
}else if(evaluation>50){
evaluation="average";
}else evaluation="poor";
console.log("the sale is"+ sales+"which indicates"+evaluation)