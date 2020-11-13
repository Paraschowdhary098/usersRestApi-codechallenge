const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:21,
        max:60,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',UserSchema);