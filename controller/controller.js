const blogModel = require ("../model/model")
const createBlog =async(req,res)=>{
    try {
        const newBlog = await blogModel .create(req.body)
        res.status(201).json({
            status:"data created",
            data:newBlog
        })
    } catch (error) {
        console.log(error.message);
    }
}
const getBlog =async(req,res)=>{
    try {
        const getsingleBlog = await blogModel .find()
        res.status(200).json({
            status:"data gotten successfully",
            data:getsingleBlog
        })
    } catch (error) {
        console.log(error.message);
    }
}
const getallBlog =async(req,res)=>{
    try {
        const id = req.params.id
        const getaBlog = await blogModel .findById(id)
        res.status(200).json({
            status:"data gotten successfully",
            data:getaBlog
        })
    } catch (error) {
        console.log(error.message);
    }
}
const updateBlog =async(req,res)=>{
    try {
        const id = req.params.id
        const updateaBlog = await blogModel .findByIdAndUpdate(id)
        res.status(201).json({
            status:"data updated successfully",
            data:updateaBlog
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deleteBlog =async(req,res)=>{
    try {
        const id = req.params.id
        const deleteaBlog = await blogModel .findByIdAndRemove(id)
        res.status(204).json({
            status:"data deleted successfully",
            data:deleteaBlog
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
    createBlog,
    getBlog,
    getallBlog,
    deleteBlog,
    updateBlog
}