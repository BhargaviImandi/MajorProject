const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

customerName:String,

email:String,

phone:String,

stylist:String,

service:String,

date:String,

time:String,

status:{

type:String,

default:"Confirmed"

}

});

module.exports = mongoose.model(

"Booking",

bookingSchema

);