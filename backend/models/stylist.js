const mongoose = require("mongoose");

const stylistSchema = new mongoose.Schema({

name:String,

specialization:String,

experience:Number,

availability:Boolean

});

module.exports = mongoose.model(

"Stylist",

stylistSchema

);