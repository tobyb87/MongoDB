
//require mongoose
var mongoose = require("mongoose");
//create schema class
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    //title is a  string
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    //link is a string
    link: {
        type: String,
        required: true
    },
    //image is a string
    image: {
        type: String,
        required: true
    },
    //saves one note's ObjectId
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }] 
});

// create the Article model with the  ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

//export the model
module.exports = Article;