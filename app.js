const http = require("http");

const server = http.createServer((req, res) => {
  console.log("truc cool");
  res.end()
})

server.listen(3000)