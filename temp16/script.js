// function sayHello(){
//     console.log("Hello World")
// }

///Arrow Function
const sayHello = () => {
  console.log("Hello World");
};

// function greet(name) {
//   console.log(name);
// }

const greet = (name) => {
  console.log(name);
};

function handleClick() {
  let name = document.getElementById("user").value;
  // console.log("Hello " + name)
  console.log(`Hello ${name}`);
}

/////////////////

function add(x, y) {
  return x + y;
}

let result = add(4, 5);
console.log(result);

///////////// var is function scope

function testScope() {
  var flag = true;
  if (flag) {
    var x = 20;
  }
  console.log(x);
}

testScope();

///////let is block scope

function testScope1() {
  var flag = true;
  if (flag) {
    let x = 20;
  }
  //console.log(x);
}

testScope1();

/////arrow function repeat

function f1() {
  console.log("f1");
}

const f2 = () => {
  console.log("f2");
};

const f3 = f2;
f3();

//////////

const main = (f) => {
  f();
};

const func1 = () => {
  console.log("func1");
};

///call back
main(func1)
