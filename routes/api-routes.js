// Dependencies --------------------------------------------
var notesData = require("../db/db.json");
// UUID to create unique IDs for notes
const { v4:uuidv4 } = require('uuid');

// Routing ----------------------------------------------
module.exports = function (app) {
    // API GET Requests - All Notes 
    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    // API GET Requests  - Single Note
    app.get("/api/notes/:id", function (req, res) {
        res.json(notesData);
    });

    // API POST Requests
    app.post("/api/notes", function (req, res) {
        //console.log(req.body);
        var newNote = req.body;

        newNote.id = uuidv4();
        //console.log(newNote);
        notesData.push(newNote);
        
        res.json(true);
    });

    // Delete Note
    app.delete("/api/delete/:id", function (req, res) {
        var chosen = req.params.id;

        for (var i = 0; i < notesData.length; i++) {
            if (chosen === notesData[i].id) {
                notesData.splice(i, 1);
                //return res.remove(notesData[i]);
            }
        }
        res.json({ ok: true });
    });
};
