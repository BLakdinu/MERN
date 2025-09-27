require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use("/",(req, res, next) => {
    res.send("Hello from Backend");
})

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));
