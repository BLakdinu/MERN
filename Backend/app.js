require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const route = require("./Routes/UserRoutes")

const app = express();

//middleware 
app.use("/users",route);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));
