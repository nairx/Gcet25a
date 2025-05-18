//(??) - Returns the right-hand operand only if the left-hand is null or undefined (not false, 0, or "").

let a
let b = a ?? 30
console.log(b)

//Example 
const products = [
  { id: 1, name: "Product 1", price: 34,qty:3, status:"pending" },
  { id: 2, name: "Product 2", price: 56,qty:5, status:"pending" },
  { id: 3, name: "Product 3", price: 40,qty:2, status:"pending" },
];

const cart= {1:4,3:5}

const total = products.reduce((sum, value)=> sum + value.price * (cart[value.id] ?? 0),0);

console.log("Total is "+total)