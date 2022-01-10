const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes= require("./routes/Questions");
const cors= require("cors")

const { MongoClient } = require('mongodb');


require('dotenv').config()


app.use(cors());
app.use(express.json());
app.use(routes);

// const uri = "mongodb://localhost:27017/Quiz";
const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hvz6i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
//mongodb+srv://burhan:<password>@cluster0.hvz6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("Quiz").collection("objectives");
//     console.log(collection)
//     // const db = mongoose.connection
//     // db.on('error', (error) => console.error(error))
//     // db.once('open', () => console.log('database connected'))
//   console.log("DB connected")
//   console.log(err.message)
//   // perform actions on the collection object
//  //client.close();
// });
// mongoose.connect('mongodb://localhost:27017/Quiz', {useNewUrlParser: true , useUnifiedTopology: true});
// var db = mongoose.connection;
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('database connected'))
//conn.on('error', console.error.bind(console, 'connection error:'));
//module.exports = conn;
//8ghGhUsHSbJIFMBb

mongoose.connect(uri).then(()=>{
    console.log("Db conected")
}).catch((err)=>{
    console.log(err.message)
})



const PORT = process.env.PORT



app.listen(PORT || 5000 ,()=>{
    console.log(`API is running 5000`);
    console.log(PORT)
})