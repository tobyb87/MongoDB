
//require mongoose
var mongoose = require("mongoose");
//create a schema class
var Schema = mongoose.Schema;


var NoteSchema = new Schema({
    body: {
        type: String
    }
});

var Note = mongoose.model("Note", NoteSchema);

//export the Note model
module.exports = Note;