const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    phone: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    score:{
        type:Number,
        default:0,
    },
    voucher:{
        type:Number,
        default:0,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = mongoose.model("User",userSchema);
module.exports = User

