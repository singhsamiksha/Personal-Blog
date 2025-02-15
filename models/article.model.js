const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    articlename: {
        type: String,
        required: true,
        trim: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;