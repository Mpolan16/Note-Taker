const http = require("http");

const PORT = 8080;

function handleRequest(request, response) {

  response.end("It Works!! Path Hit: " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});