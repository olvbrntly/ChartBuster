const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title:{
        type:String
    },
    director_fname:{
        type:String
    },
    director_lname:{
        type:String
    },
    genre:[{
        type:Schema.Types.ObjectId,
        ref:"Genre"
    }],
    description:{
        type:String
    },
    run_time:{
        type:Number
    }


})

module.exports = mongoose.model("Movie", MovieSchema)