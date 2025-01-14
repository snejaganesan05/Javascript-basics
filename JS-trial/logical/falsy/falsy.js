// falsy values
let name = "sneja";
let emptyStr;

console.log(emptyStr);

let value = null;
console.log(value);

let main = "";
console.log(main);

let first = false;
let second = "animal";

console.log(first && second);
// STRING CONVERSION

let ans = true;
console.log(typeof ans);
ans = String(ans);
console.log(typeof ans);

let que = false;
console.log(typeof que);
que = String(que);
console.log(typeof que);

// NUMERIC CONVERSION

let str = "4567";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

let intro = "900";
console.log(typeof intro);
intro = Number(intro);
console.log(typeof intro);

let quantity = "people";
console.log(typeof quantity);
quan = Number(quantity);
console.log(quantity);

// Question: Write a program that checks if a user is eligible to vote. The user must be at least 18 years old (age) and a citizen (isCitizen). Assign age to 20 and isCitizen to true. Print "Eligible to vote" if both conditions are met; otherwise, print "Not eligible to vote."
let age = 20;
let isCitizen = true;

if (age >= 18 && isCitizen) {
  console.log("Eligible to vote");
} else {
  console.log("not eligible to vote");
}

// Question: Write a program that checks if a user is eligible for a discount. The user is eligible if they are a student (isStudent) or a senior (age >= 65). Assign isStudent to false and age to 70. Print "Eligible for discount" if either condition is true; otherwise, print "Not eligible for discount."

let isStudent = false;
age = 70;

if (isStudent || age >= 65) {
  console.log("Eligible for discount");
} else {
  console.log("Not eligible for discount");
}

// Question: Write a program that checks if a store is open. The store is closed on Sundays (isSunday). Assign isSunday to false. Use the NOT operator to print "Store is open" if the day is not Sunday, and "Store is closed" if it is Sunday.
let isSunday = false;
if (!isSunday) {
  console.log("Store is open");
} else {
  console.log("Stoe is closed");
}

//  Write a program that checks if a person can apply for a job. The person must have at least 2 years of experience (yearsOfExperience >= 2) or a degree (hasDegree), and must be willing to relocate (willingToRelocate). Assign yearsOfExperience to 3, hasDegree to false, and willingToRelocate to true. Print "Can apply for the job" if these conditions are met; otherwise, print "Cannot apply for the job."
let yearsOfExperience = 3;
let hasDegree = false;
let willingToRelocate = true;

if (yearsOfExperience >= 2 || (hasDegree && willingToRelocate)) {
  console.log("Can apply for the Job");
} else {
  console.log("Cannot apply for the job");
}

// Nested IF Statements with AND:
// Question: Write a program that checks if a person can attend a restricted event. The person must be at least 21 years old (age). If they are at least 21, they must also have a valid ID (hasValidID). Assign age to 22 and hasValidID to true. Print "Access granted" if both conditions are met; otherwise, print "Access denied."

let ages = 22;
hasValidID = true;

if (ages >= 21 && hasValidID) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Using ELSE IF with OR:
// Question: Write a program that assigns a grade based on a test score (score). If the score is 90 or above, print "Grade: A". If the score is between 75 and 89, print "Grade: B". If the score is below 75, print "Grade: C". Assign score to 85.
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75 || score <= 89) {
  console.log("Grade B");
} else if (score <= 75) {
  console.log("Grade C");
}

// Combining AND, OR, and NOT:
// Question: Write a program that checks if a user has access to a premium feature. The user must be a subscriber (isSubscriber) and not have a ban on their account (isBanned). Assign isSubscriber to true and isBanned to false. Print "Access to premium feature" if both conditions are met; otherwise, print "No access to premium feature."
let isSubscriber = true;
let isBanned = false;

if (isSubscriber && !isBanned) {
  console.log("Access to premium Feature");
} else console.log("No Access to premium Featrue");

// Multiple ELSE IF Conditions:
// Question: Write a program that describes the weather based on temperature (temperature). If the temperature is above 30, print "It's hot outside." If the temperature is between 20 and 30, print "It's warm outside." If the temperature is below 20, print "It's cold outside." Assign temperature to 35.
let temparature=35;
if(temparature>30){
    console.log("Its hot outside");
}else if(20<temparature<30){
    console.log("Its warm outside")
}else if(20>temparature){
    console.log("Its cold outside");
}
// Combining Logical Operators in One Condition:
// Question: Write a program that checks if a person can enter a special event. The person can enter if they are at least 21 years old (age >= 21) or if they are at least 18 years old and have a VIP pass (hasVIPPass). Assign age to 19 and hasVIPPass to true. Print "Entry allowed" if they meet the criteria; otherwise, print "Entry denied."
let agess=19;
hasVIPPass=true;
if(agess>=21||agess>18 && hasVIPPass){
    console.log("Entry Allowed");
}else {
    console.log("Entry Denied")
}


//  Write a program that checks if a user qualifies for a special offer. The user must be a member (isMember) and either have a coupon (hasCoupon) or it must be during a promotional period (isPromoPeriod). Assign isMember to true, hasCoupon to false, and isPromoPeriod to true. Print "Special offer applied" if these conditions are met; otherwise, print "No special offer."
let isMember=true;
hasCoupon=false;
isPromoPeriod=true;
if(isMember&&(hasCoupon||isPromoPeriod)){
  console.log("SPECIAL OFFER APPLIED");
}else{
  console.log("No special offer");
}