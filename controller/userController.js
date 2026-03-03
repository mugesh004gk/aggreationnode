const userController= new Object()
const userModel=require("../model/userModel")

userController.usercreate=async(req,res)=>{
    try{
        let body = req.body
        let result=await userModel.create(body)
        if(result){
            return{status:true,statuscode:201,message:"userid created !",data:result}
        }
            return{status:false,statuscode:400,message:"userid not created"}
    }
    catch(err){
        console.log(err)
    }
}

userController.userfind=async(req,res)=>{
    try{
        let result=await userModel.find()
        if(result){
            return {status:true,statuscode:200,message:"userid found !",data:result}
        }
            return {status:false,statuscode:400,messsage:"userid not found"}
    }
    catch(err){
        console.log(err)
    }
}

userController.useridfind=async(req,res)=>{
    try{
        let userid=req.params.id
        let result=await userModel.findById(userid)
        if(result){
             return {status:true,statuscode:200,message:"user ids found !",data:result}
        }
             return {status:false,statuscode:400,messsage:"user  ids not found"}
    }
    catch(err){
        console.log(err)
    }
}

userController.userupdate=async(req,res)=>{
    try{
        let userid=req.params.id
        let payload=req.body
        let result=await userModel.findByIdAndUpdate(userid,payload,{new:true})
        if(result){
             return {status:true,statuscode:200,message:"user acc updated !",data:result}
        }
             return {status:false,statuscode:400,messsage:"user acc not updated"}
    }
    catch(err){
        console.log(err)
    }
}

userController.userdeleted=async(req,res)=>{
    try{
        let userid=req.params.id
        let result=await userModel.findByIdAndDelete(userid,{new:true})
        if(result){
             return {status:true,statuscode:200,message:"user acc deleted !",data:result}
        }
             return {status:false,statuscode:400,messsage:"user acc not deleted"}
    }
    catch(err){
        console.log(err)
    }
}

module.exports=userController