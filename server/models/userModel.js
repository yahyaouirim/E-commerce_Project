//Schema for creating user model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email:{
        type:String,
        unique: true,

    },
    password:{
        type:String,
    },
    cartData: {
        type: Object,
    },
    isadmin:{
        type:Boolean,
    }

}, {timestamps:true})


module.exports = mongoose.model('Users', UserSchema)