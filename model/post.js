
const mongoose =require("mongoose")
const postschema=new mongoose.Schema({

    Name:{
        type:String
    },
    time:{
       type:Date,
       default:Date.now()
    }
})
module.exports=mongoose.model("postt",postschema)
