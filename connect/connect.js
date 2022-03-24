const mongoose = require("mongoose")
const url="mongodb://localhost/blogDB"
mongoose.connect(url).then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("something is wrong");
})