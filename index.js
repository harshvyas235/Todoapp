




























































const express = require("express");
const app = express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;
app.use(express.json());

const todoRoutes= require("./routes/todos")
app.use("/api/v1",todoRoutes);

app.listen(3000,()=>{
    console.log(`Server started successfully at ${PORT}`);

})
const dbconnect=require("./config/database");
dbconnect();
app.get("/",(req,res)=>{
    res.send(`<h1>this is the home page</h1>`)
})