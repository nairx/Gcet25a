//1. Rest in Function Parameters

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20));  // 30

//2. Rest in Array Destructuring

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

//3. Rest in Object Destructuring

const user = { name: "Alice", age: 25, city: "NYC" };
const { name, ...otherDetails } = user;
console.log(name);         // "Alice"
console.log(otherDetails); // { age: 25, city: "NYC" }