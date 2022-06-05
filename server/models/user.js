const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
       
    },
   
    },
    {timestamps:true}
    )

module.exports = mongoose.model("User",UserSchema)