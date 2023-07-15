const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const CopySchema = new Schema({
    movie:{
        type:Schema.Types.ObjectId,
        ref:"Movie",
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["Avaliable","Not Available"],
        default:"Not Available"
    },
    price:{
        type:Number,
        required:true,
    },
    rental_period:{
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model("Copy", CopySchema)