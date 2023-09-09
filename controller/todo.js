const { json } = require("express");
const Todo=require("../model/Todo");
const Post=require("../model/post")


exports.createTodo = async(req,res)=>{
    // try{
    //     const {title,description}=req.body
    //     const response=await Todo.create(title,description);
    //     res.status(200).json({
    //         success:true,
    //         data:response,
    //         message:'Entry Created Successfully'
    //     });


    // }
    try {
        //extract title and desxcription from reauest body
        const {title,description} = req.body;
        //create a new Todo Obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
}
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }

}

exports.postTodo =async(req,res)=>{
    
    try {
        //extract title and desxcription from reauest body
        const {name,time} = req.body;
        //create a new Todo Obj and insert in DB
        const response = await Post.create({name,time});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
}
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }

}

