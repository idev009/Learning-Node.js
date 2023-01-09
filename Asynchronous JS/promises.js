const p = new Promise((resolve, reject) => {
  // kick off some async work like accesss db, services, timer etc

  setTimeout(() => {
    console.log("Async Work");
    // resolve(1);
    reject(new Error("message"));
  }, 2000);
});

p.then((result) => console.log(result));
p.catch((err) => console.error(err.message));
