const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // routing url
    res.write("Hello World");
  }
  if (req.url === "/course") {
    res.write(JSON.stringify(["1", "2", "3"]));
  } else {
    res.write("NO Route Available");
  }
  res.end();
});

server.listen(3000);
