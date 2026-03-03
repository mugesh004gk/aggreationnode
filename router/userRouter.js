const express=require("express")
const userController=require("../controller/userController")
const userRouter=express.Router()

userRouter.post("/usercreates",async(req,res)=>{
    try{
        let result=await userController.usercreate(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

userRouter.get("/userget",async(req,res)=>{
    try{
        let result=await userController.userfind(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

userRouter.get("/:id",async(req,res)=>{
    try{
        let result=await userController.useridfind(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

userRouter.put("/:id",async(req,res)=>{
    try{
        let result=await userController.userupdate(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

userRouter.delete("/:id",async(req,res)=>{
    try{
        let result=await userController.userdeleted(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports=userRouter