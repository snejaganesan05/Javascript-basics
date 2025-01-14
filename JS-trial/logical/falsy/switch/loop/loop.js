// Print even numbers between 1 and 50. (while loop)
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Print numbers from 1 to 30. If a number is divisible by 2 or 3, print "Divisible by 2 or 3". (for loop)
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }

// Print numbers from 10 to 30. If a number is divisible by 2 and not by 4, print "Divisible by 2 but not by 4". (while loop)
// for (let i = 10; i <= 30; i++) {
//   if (i % 2 == 0 && i % 4 != 0) {
//     console.log("Divisible by 2 but not by 4");
//   } else {
//     console.log(i);
//   }
// }

// Print numbers from 5 to 25. If a number is divisible by 2 or 3 and not by 4, print "Special Number" (while loop)
// for (let i = 5; i <= 25; i++) {
//   if ((i % 2 == 0 || i % 3 == 0) && i % 4 != 0) {
//     console.log("Special number");
//   } else {
//     console.log(i);
//   }
// }

// . Print numbers from 1 to 20. If a number is less than 10 and divisible by 2, print "Less than 10 and Even". (do while loop)
// for (let i = 1; i <= 20; i++) {
//   if (i < 10 && i % 2 == 0) {
//     console.log("Less than 10 and even");
//   } else {
//     console.log(i);
//   }
// }

// 7. Print numbers from 1 to 40. If a number is divisible by 6 or (divisible by 2 and not by 4), print "Special". (while loop)

// for (let i = 1; i <= 40; i++) {
//   if (i % 6 == 0 || (i % 2 == 0 && i % 4 != 0)) {
//     console.log("SPECIAL");
//   } else {
//     console.log(i);
//   }
// }

// WHILE AND DO WHILE
// 1. Print numbers from 1 to 20. If a number is divisible by 4, print "Divisible by 4". (do while loop)
let a = 1;
while (a <= 20) {
  if (a % 4 == 0) {
    console.log("Divisible by 4");
  } else {
    console.log(a);
  }
  a++;
}

// do while
let g = 1;
do {
  if (g % 4 == 0) {
    console.log("Divisible by 4");
  } else {
    console.log(g);
  }
  g++;
} while (g <= 20);

// Print even numbers between 1 and 50. (while loop)
let i = 1;
while (i <= 50) {
  if (i % 2 == 0) {
    console.log(i);
  }

  i++;
}

// do while

let h = 1;
do {
  if (h % 2 == 0) {
    console.log(h);
  }

  h++;
} while (h <= 50);

// Print numbers from 1 to 30. If a number is divisible by 2 or 3, print "Divisible by 2 or 3". (for loop)
let b = 1;
while (b <= 30) {
  if (b % 2 == 0 || b % 3 == 0) {
    console.log("Divisible by 2 or 3");
  } else {
    console.log(b);
  }
  b++;
}

// do while

let j = 1;
do {
  if (j % 2 == 0 || j % 3 == 0) {
    console.log("Divisible by 2 or 3");
  } else {
    console.log(j);
  }
  j++;
} while (j <= 30);

// Print numbers from 10 to 30. If a number is divisible by 2 and not by 4, print "Divisible by 2 but not by 4". (while loop)
let c = 10;
while (c <= 30) {
  if (c % 2 == 0 && c % 4 != 0) {
    console.log("Divisible by 2 and not by 4");
  } else {
    console.log(c);
  }
  c++;
}

// do while

let k = 10;
do {
  if (k % 2 == 0 && k % 4 != 0) {
    console.log("Divisible by 2 and not by 4");
  } else {
    console.log(k);
  }
  k++;
} while (k <= 30);

// Print numbers from 5 to 25. If a number is divisible by 2 or 3 and not by 4, print "Special Number" (while loop)
let d = 5;
while (d <= 25) {
  if ((d % 2 == 0 && d % 3 == 0) || d % 4 != 0) {
    console.log("Special Number");
  } else {
    console.log(d);
  }
  d++;
}

// do while
let l = 5;
do {
  if ((l % 2 == 0 && l % 3 == 0) || l % 4 != 0) {
    console.log("Special Number");
  } else {
    console.log(l);
  }
  l++;
} while (l <= 25);
// Print numbers from 1 to 20. If a number is less than 10 and divisible by 2, print "Less than 10 and Even". (do while loop)
let e = 1;
while (e <= 20) {
  if (e < 10 && e % 2 == 0) {
    console.log("Less than 10 and even");
  } else {
    console.log(e);
  }
  e++;
}

// Print numbers from 1 to 40. If a number is divisible by 6 or (divisible by 2 and not by 4), print "Special". (while loop)
let f = 1;
while (f <= 40) {
  if (f % 6 == 0 || (f % 2 == 0 && f % 4 != 0)) {
    console.log("Special");
  } else {
    console.log(f);
  }
  f++;
}

// do while
