

//Routes to test basic routing with express
const express = require('express')
//importing mongoose to managamente data
//import Article from "../models/Article";
//import ArticleSchema from "../schemas/ArticleSchema";


// execute when error occur when connects to database
//connection = mongoose.connection
//connection.on('error', console.error.bind(console, 'connection error:'))


var router = express.Router()
router.get('/articles', (req, res) => {
    res.json("{'user':'carlos'}")
});

router.post('/article', (req, res) => {
    res.json(req.body)
});


module.exports = router