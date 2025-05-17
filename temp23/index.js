//Issue - occuring at the same time
const f1 = () => {
  setTimeout(() => {
    return 5;
  }, 5000);
};
const f2 = (x) => {
  console.log(x + 6);
};
let n1 = f1();
f2(n1);

//Use Call back to solve the issue
const f1 = (fnc) => {
  setTimeout(() => {
    fnc(5);
  }, 5000);
};
const f2 = (x) => {
  console.log(x + 6);
};
f1(f2);

////Use Promise and .then
const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5); //use resolve/reject instead of return
    }, 5000);
  });
};
const f2 = (x) => {
  console.log(x + 6);
};
f1().then((a) => f2(a));

//Use Promise and Async/Await - new way
const f1 = () => {
  return new Promise((resolve, reject) => {
    resolve(5);
    // reject("Something went wrong");
  });
};
const f2 = (x) => {
  console.log(x+6)
};
const f3 = async () => {
  try {
    let n1 = await f1();
    f2(n1);
  } catch (err) {
    console.log(err);
  }
};
f3();
