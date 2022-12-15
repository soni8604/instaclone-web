// import all the necessary packages
const express = require("express");
const cors = require("cors");
const fs=require("fs")
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//
const port = process.env.PORT || 8000;

// we will create these instacloneRoutes in the future
const instacloneRoutes = require("./routes/Post");

const app = express();
// const uri = "mongodb+srv://soniji:Monu%408604@cluster0.chr5vzr.mongodb.net/?retryWrites=true&w=majority";
// DB connection
// const localURI="mongodb://127.0.0.1:27017/instaclone"

dotenv.config();
mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    })
app.use(cors());

app.use(bodyParser.json());

app.use("/api", instacloneRoutes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
