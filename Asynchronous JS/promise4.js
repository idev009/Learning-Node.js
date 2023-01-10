const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Work 1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Work 2");
    // reject(new Error("message"));
  }, 2000);
});
// Parallel Promises
Promise.all([p1, p2])
  .then((result) => console.log("result", result))
  .catch((err) => console.log(err));
