const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use("/",(req, res, next) => {
    res.send("Hello from Backend");
})

mongoose.connect("mongodb+srv://MrB:hallo123@cluster-a.kcqfzcn.mongodb.net/MrB-Test")
.then(() => console.log("connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));