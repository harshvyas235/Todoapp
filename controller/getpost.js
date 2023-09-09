const { json } = require("express");
const Todo=require("../model/Todo");
const Post=require("../model/post")


exports.getTodo = async(req,res) => {
    try {
            //fetch all todo items from database
            const todos = await Todo.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire Todo Data is fetched",
            });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}