// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//fetch function returns promise that's why used await
//res.json also returns a promise thats why used await

// function greet(){
//   console.log("Hello World")
// }

// async function dispData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json()
//   console.log(data);
//   greet()
// }
// dispData();


//What should we do so that greet runs after displaying the data from api

//change add function to return promise
function add(x,y){
  return x+y
}
function sqr(a){
return a*a
}
function main(){
  let sum = add(4,5)
  let result = sqr(sum)
  console.log(result)
}
main()