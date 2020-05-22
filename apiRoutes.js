const notesData = require("./db/notesData");
const fs = require ("fs");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json", "utf8", (err,data) => {
            res.json(JSON.parse(data));
        })
    });
  
    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.json(true);
      });
//not sure how to delete yet...
    app.delete("/api/notes/:id", function(req, res) {
        notesData.push(req.body);
        res.json(true);
      });
    };