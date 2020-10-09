
const mongoose = require('mongoose')

/* Article Schema

*/
const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = ArticleSchema;