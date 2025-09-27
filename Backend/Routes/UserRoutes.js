const express = require('express');
const router = express.Router();

//Insert Model
const User = require("../Models/UserModel");

//nsert User Controller
const UserControllers = require("../Controllers/UserControllers");

router.get("/",UserControllers.getAllUsers);

//export router
module.exports = router;