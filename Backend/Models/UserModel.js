const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userrSchema = new Schema({
    name:{
        type:String,
        requred:true,
    },
    email:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "UserModel", //file name we coded
    userrSchema //function name
);