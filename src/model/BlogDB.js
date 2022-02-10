const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vigneshk:0FUq5aupPLL3rriM@cluster0.ca6v9.mongodb.net/blog-app?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name : String,
    username :String,
    upvotes : Number,
    comments:Array
});

var ArticleInfo = mongoose.model('articles',articleSchema);


module.exports = ArticleInfo;