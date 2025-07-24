const express = require('express');
const router = express.Router();

const {urlShorten, getLongUrl} = require('../controllers/urlController');

router.get('/', (req,res)=>{
    res.render('index', {shortUrl: null})
})


router.post('/urlshortener', urlShorten)

router.get('/:shortCode', getLongUrl)

module.exports = router