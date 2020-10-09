

//Routes to test basic routing with express
const express = require('express')
//importing mongoose to managamente data
const Article = require("../models/Article");
const mongoose = require("mongoose")


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
// execute when error occur when connects to database
connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error:'))


var router = express.Router()

//list articles endpoint
router.get('/articles', (req, res) => {
    const articles = Article.find()

    res.json("{'article':'some_text'}")
});

//create article endpoint
router.post('/article', (req, res) => {
    var newArticle = new Article({ title: "sei la" })
    newArticle.save().then(() => { console.log("salvo com sucesso") })
    res.json(req.body)
});


module.exports = router