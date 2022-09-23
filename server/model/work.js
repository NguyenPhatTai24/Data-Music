const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workShema = new Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('listsong',workShema)