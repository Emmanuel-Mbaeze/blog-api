require("./connect/connect")
const express = require ("express")
const myRoute = require("./router/router")
const PORT = 1234
const app = express()
app.use(express.json())
app.use("/api",myRoute)
app.listen(PORT,()=>{
    console.log(`connecting to..... ${PORT}`);
})