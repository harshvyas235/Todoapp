const mongoose= require("mongoose")

const commennt=new mongoose.Schema({

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String
    }

})
module.exports=mongoose.model("coment",commennt)