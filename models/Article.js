var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    
    summary: {
        type: String,
        required: true,
    },

    date: String,

    note:{
        type: Schema.Types.ObjectId,
        ref: "Note"
    },

    saved:{
        type: Boolean,
        default: false
    },

    artilcleCreated:{
        type: Date,
        default: Date.now
    },

});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;