const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = 3000;
const urlRouter = require("./src/routes/urlRoutes");

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

;(async () => {
    try {
        await mongoose
    .connect("mongodb+srv://ghusharib:allied11m@cluster0.y3gibzq.mongodb.net/")
    console.log("DB connected!");
    
    } catch (error) {
        console.log(error);
    }
})();


app.use(urlRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
