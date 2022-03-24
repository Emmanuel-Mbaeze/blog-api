const express = require ("express")
const myRoute = express.Router()
const {createBlog,getBlog,getallBlog,updateBlog,deleteBlog}=require("../controller/controller")
myRoute.post("/post",createBlog)
myRoute.get("/get",getBlog)
myRoute.get("/get/:id",getallBlog)
myRoute.patch("/patch/:id",updateBlog)
myRoute.delete("/delete/:id",deleteBlog)
module.exports= myRoute