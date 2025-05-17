function f1() {
  return new Promise((resolve, reject) => {
    // resolve("f1");
    reject("Some error");
  });
}

function f2() {
  return "f2";
}

async function main() {
  try {
    const r1 = await f1();
    console.log(r1);
    const r2 = f2();
    console.log(r2);
  } catch (err) {
    console.log(err);
  }
}

main();
