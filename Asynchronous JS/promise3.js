// promise-api.

const p = Promise.resolve({ id: 1 });
p.then((result) => console.log("result", result));

const p1 = Promise.reject(new Error("Promise Rejected"));
p1.catch((err) => console.log("error => ", err));
