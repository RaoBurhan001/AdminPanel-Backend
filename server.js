const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes= require("./routes/Questions");
const cors= require("cors")
require('dotenv').config()


app.use(cors());
app.use(express.json());
app.use(routes);


mongoose.connect("mongodb://localhost:27017/Quiz", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

















const PORT = process.env.PORT



app.listen(PORT || 5000 ,()=>{
    console.log(`API is running 5000`);
    console.log(PORT)
})