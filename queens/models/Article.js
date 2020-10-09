

//const ArticleSchema = require('../schemas/ArticleSchema')
const mongoose = require('mongoose')


/* Article Schema

*/
const ArticleSchema = mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('Article', ArticleSchema)