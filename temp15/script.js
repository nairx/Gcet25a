dvTitle.innerHTML = "Hello World";
let a = 10;
let b = 14;
let c = 5;
if (a > b && a > c) {
  console.log("a is greatest");
} else if (b > a && b > c) {
  console.log("b is greatest");
} else {
  console.log("c is greatest");
}

////while
let i = 1;
while (i < 4) {
  console.log(i);
  i = i + 1;
}
///for loop
for (let j = 1; j < 4; j++) {
  console.log(j);
}

//break
// let z = 0;
// while (z < 4) {
//   console.log(z);
//   z = z + 1;
//   if (z === 2) {
//     break;
//   }
// }

//continue
let z = 0;
while (z < 4) {
  z = z + 1;
  if (z === 2) {
    continue;
  }
  console.log(z);
}

/////////////ternary operator
let age = 12
age > 18 ? console.log("Welcome") : console.log("Not allowed")

let hour = 13
hour < 12 && console.log("Good Morning")