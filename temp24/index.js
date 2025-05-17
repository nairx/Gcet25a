fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function dispData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json()
  console.log(data);
}
dispData();

