const fs = require ("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json", "utf8", (error,data) => {
            if(error){
                throw error
            }
            res.json(JSON.parse(data));
        })
    });
  
    app.post("/api/notes", function(req, res) {
        var post = req.body;
        post.id = uuidv4(); 
        fs.readFile("db/db.json", "utf8", (error,data) => {
            if(error){
                throw error
            }
            var dataArray = JSON.parse(data)
            dataArray.push(post);
            fs.writeFile("db/db.json", JSON.stringify(dataArray), (err)=>{
                if(error){
                    throw error
                } else {
                    console.log("Write File Successful!")
                }
            })
        })
        res.json(post);
      });
    app.delete("/api/notes/:id", function(req, res) {
        notesData.push(req.body);
        res.json(true);
      });
    };

