const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    director_fname:{
        type:String,
        required:true
    },
    director_lname:{
        type:String,
        required:true
    },
    genre:[{
        type:Schema.Types.ObjectId,
        ref:"Genre"
    }],
    description:{
        type:String,
        required:true
    },
    run_time:{
        type:Number
    },
    year_released:{
        type:Date,
        required:true
    }


})

// directors full name
MovieSchema.virtual("full_name").get(function(){
    let fullname="";
    if(this.director_fname && this.director_lname){
        fullname = `${this.director_lname}, ${this.director_fname}`
    }
    return fullname
})
//

module.exports = mongoose.model("Movie", MovieSchema)