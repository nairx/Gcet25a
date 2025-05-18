const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const showProducts = () => {
  let str = ""
  products.map(value=>{
    str += 
    `<div>
      <h3>${value.name}</h3>
      <h4>${value.price}</h4>
      <button>Add to Cart</button>
     </div>
    `
  })
  root.innerHTML = "<div class='row'>" + str + "</div>"
};
