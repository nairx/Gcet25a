const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 0 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

const validateUser = () => {
  let card = document.getElementById("card").value;
  let pin = document.getElementById("pin").value;
  const found = customers.find(
    (value) => value.card == card && value.pin == pin
  );
  const handleSubmit = () => {
    let transaction = document.getElementById("transaction").value;
    let amount = document.getElementById("amount").value;
    // if (transaction === "Deposit") {
    //   if (found.balance > amount) {
    //     customers[found.index]
    //   }
    // }
  };
  console.log(found);
  if (found) {
    let str = `
      <h2>Welcome ${found.name}</h2>
      <p>
        <select id='transaction'>
          <option>Deposit</option>
          <option>Withdraw</option>
        </select>
      </p>
      <p>
        <input type='text' id='amount' placeholder='Enter Amount'>
      </p>
      <p>
        <button onclick='handleSubmit()'>Submit</button>
      </p>
      <hr>
      <strong>Current Balance:${found.balance}</strong>
      `;
    root.innerHTML = str;
  } else {
    error.innerHTML = "Invalid Card or Pin";
  }
};

const login = () => {
  let str = `
    <p><span id='error'/></p>
    <p><input type="text" id="card" placeholder="Card #"></p>
    <p><input type="password" id="pin" placeholder="4-digit pin"></p>
    <p><button onclick='validateUser()'>Login</button>
  `;
  root.innerHTML = str;
};

login();
