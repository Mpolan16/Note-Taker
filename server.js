var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// const fs = require("fs");
// const express = require("express");

// const app = express();

// const PORT = 8080;

// const server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     const path = req.url;

//     switch (path) {
//     case "/":
//         return displayHome(res);
//     case "/notes":
//         return displayNotes(res);
//     default:
//         return display404(path, res);
//     }
// }

// //create a function for home page
// function displayHome(res){
//     fs.readFile(__dirname + "/public/index.html", function(err, data) {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
// }
// //create func for notes
// function displayNotes(res){
//     fs.readFile(__dirname + "/public/notes.html", function(err, data) {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
// }

// //create func for 404
// function display404(path, res) {
//   const myHTML = "<html>" +
//     "<body><h1>404 Not Found </h1>" +
//     "<p>The page you were looking for: " + path + " can not be found</p>" +
//     "</body></html>";
//   res.writeHead(404, { "Content-Type": "text/html" });
//   res.end(myHTML);
// }

// server.listen(PORT, function() {
//   console.log("Server listening on: http://localhost:" + PORT);
// });