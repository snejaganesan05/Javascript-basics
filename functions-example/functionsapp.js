// 1. Print numbers from 1 to 20. If a number is divisible by 4, print "Divisible by 4". (do while loop)
function numbers() {
  for (i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
      console.log("divisible by 4");
    } else {
      console.log(i);
    }
  }
}
numbers();
// 2.  Print even numbers between 1 and 50. (while loop)
function even() {
  for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
even();
// Print numbers from 1 to 30. If a number is divisible by 2 or 3, print "Divisible by 2 or 3".
function divisible() {
  for (i = 1; i <= 30; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
      console.log("divisible by 2 or 3");
    } else {
      console.log(i);
    }
  }
}
divisible();

// 4. Print numbers from 10 to 30. If a number is divisible by 2 and not by 4, print "Divisible by 2 but not by 4".
function print() {
  for (i = 11; i <= 30; i++) {
    if (i % 2 == 0 && i % 4 != 0) {
      console.log("divisible by 2 but not 4");
    } else {
      console.log(i);
    }
  }
}
print();

// 5. Print numbers from 5 to 25. If a number is divisible by 2 or 3 and not by 4, print "Special Number" (while loop)
function special() {
  for (i = 5; i <= 25; i++) {
    if ((i % 2 == 0 || i % 3 == 0) && i % 4 != 0) {
      console.log("special number");
    } else {
      console.log(i);
    }
  }
}
special();
// 6. Print numbers from 1 to 20. If a number is less than 10 and divisible by 2, print "Less than 10 and Even". (do while loop)
function less() {
  for (i = 1; i <= 20; i++) {
    if (i < 10 && i % 2 == 0) {
      console.log("Less than 10 and even");
    } else {
      console.log(i);
    }
  }
}
less();
// Print numbers from 1 to 40. If a number is divisible by 6 or (divisible by 2 and not by 4), print "Special". (while loop)
function multiple() {
  for (i = 1; i < 40; i++) {
    if (i % 6 == 0 || (i % 2 == 0 && i % 4 != 0)) {
      console.log("special number");
    } else {
      console.log(i);
    }
  }
}
multiple();
