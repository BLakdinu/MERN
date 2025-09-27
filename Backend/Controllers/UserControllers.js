const users = require("../Models/UserModel");

const getAllUsers = async (req, res, next) => {
    let users;
    try{
        users = await users.find();
    }catch(err){
        console.log(err);
    }
    //Not found database data

   if(!users){
    return res.status(404).json({message:"No Users funded"});
   }

   //Display All Users
   return res.status(200).json({users});
};

exports.getAllUsers = getAllUsers;