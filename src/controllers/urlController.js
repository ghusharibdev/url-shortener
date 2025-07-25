const shortID = require("shortid");
const Url = require("../model/Url");

const urlShorten = async (req, res) => {
  const { longUrl } = req.body;
  const shortid = shortID.generate();
  const shortURL = `http://localhost:3000/${shortid}`;
  const newurl = new Url({ shortCode: shortid, longUrl });
  await newurl.save();
  console.log(shortURL);

  res.render("index", { shortUrl: shortURL });
};

const getLongUrl = async (req, res) => {
  const code = req.params.shortCode;
  const findUrl =  await Url.findOne({ shortCode: code });

  if (!findUrl) return res.sendStatus(404);

  const { longUrl } = findUrl
  return res.redirect(longUrl);
};

module.exports = { urlShorten, getLongUrl };
