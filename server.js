const http = require("http");
const fs = require("fs");

const PORT = 8080;

function handleRequest(req, res) {
    fs.readFile(__dirname + "/public/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
}
const server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});