//require project dependencies

const express = require("express");
const cors = require('cors')
require('dotenv').config();
const { json } = require("express");
const mongoose = require('mongoose');
const router = require('./routes/todoRoute')

const app = express();

//declare the middleware

app.use(json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//create the database connection

const url = process.env.DB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const db = mongoose.connection;
db.on("error", (err)=>{
    console.log("error connecting to database "+err)
});
db.once("open", function () {
  console.log("Connected successfully");
});

//call the route handler

app.use("/", router);

//listen for connections

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
