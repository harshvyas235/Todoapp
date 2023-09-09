

const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description: {
        type:String,
        required:true,
        maxLength:50,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    place:{
        type:String,
    //    default:"dewas",
        maxLength:50,


    }
})
module.exports=mongoose.model("Todo",todoSchema)