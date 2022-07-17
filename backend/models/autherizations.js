const mongoose = require('mongoose');

const user = require("../models/users")

const autherizationSchema = mongoose.Schema({
   userID:{type:mongoose.ObjectId,ref:"user",required:true},
   role:{type:String,enum:["rootAdmin", "admin", "regUser"]}
})


module.exports = mongoose.model('autherization', autherizationSchema);