const express=require("express")
const detailsController=require("../controller/detailsController")
const detailsRouter=express.Router()

detailsRouter.post("/dlscreate",async(req,res)=>{
    try {
        let result=await detailsController.detailscreate(req)
        if(result){
            return res.send(result)
        }
    } 
    catch (err) {
        console.log(err)
    }
})
detailsRouter.get("/dlsfind",async(req,res)=>{
    try {
        let result=await detailsController.detailsfind(req)
        if(result){
            return res.send(result)
        }
    } 
    catch (err) {
        console.log(err)
    }
})

detailsRouter.get("/:id",async(req,res)=>{
    try {
        let result=await detailsController.detailsfindid(req)
        if(result){
            return res.send(result)
        }
    } 
    catch (err) {
        console.log(err)
    }
})

detailsRouter.put("/:id",async(req,res)=>{
    try {
        let result=await detailsController.detailsupdate(req)
        if(result){
            return res.send(result)
        }
    } 
    catch (err) {
        console.log(err)
    }
})

detailsRouter.delete("/:id",async(req,res)=>{
    try {
        let result=await detailsController.detailsdeleted(req)
        if(result){
            return res.send(result)
        }
    } 
    catch (err) {
        console.log(err)
    }
})

module.exports=detailsRouter