const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controller/todo");
const{postTodo}=require("../controller/todo")
const {getTodo}=require("../controller/getpost")

//define APi routes
router.post("/createTodo", createTodo);
router.post("/postTodo", postTodo);
router.post("/getpost",getTodo)


module.exports = router;