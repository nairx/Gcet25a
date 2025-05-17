const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

//spread operator on array - square bracket
const newProducts = [...products,newProduct]
console.log(newProducts)

//spread operator on object - curly bracket
const newArr = products.map((value) => ({ ...value, price: value.price + 5 }));
console.log(newArr);
const newProduct = { id: 4, name: "p4", price: 70 };
