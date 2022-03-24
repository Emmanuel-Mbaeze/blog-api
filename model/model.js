const mongoose = require ("mongoose")
const blogDB = mongoose.Schema({
    blogTitle:{
        required:true,
        type:String
    },
    blogContent:{
        required:true,
        type:String
    },
    // Date:{
    //     type:Date,
    //     default:new Date
    // }
},{timestamps:true})
module.exports=mongoose.model("blog",blogDB)