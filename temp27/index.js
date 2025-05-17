// 1. Destructuring Arrays

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// You can skip elements:
const [first, , third] = numbers;
console.log(third); // 3

// 2. Destructuring Objects

const person = {
  name: "Alice",
  age: 25,
};
const { name, age } = person;
console.log(name); // Alice
console.log(age);  // 25

// You can also rename while destructuring:
const { name: fullName } = person;
console.log(fullName); // Alice

// 3. Default Values

const [x = 10, y = 20] = [undefined, 5];
console.log(x); // 10
console.log(y); // 5

const { city = "Unknown" } = { name: "Bob" };
console.log(city); // Unknown

// 4. Nested Destructuring

const user = {
  id: 1,
  profile: {
    username: "js_dev",
    email: "js@example.com",
  },
};

const { profile: { username } } = user;
console.log(username); // js_dev