const shortID = require('short-uuid')

const urlShorten = (req,res)=>{
    // const longUrl = req.body.longUrl;
    const shortid = shortID.generate()
    const shortURL = `http://localhost:3000/${shortid}`
    console.log(shortURL);
    
    res.render('index', {shortUrl: shortURL})
}

const getLongUrl = (req,res)=>{
    const code = req.params.shortCode;

}

module.exports = {urlShorten, getLongUrl}