const detailsController=new Object()
const detailsModel=require("../model/detailsModel")
const detailsDal=require("../Dal/detailsDal")

detailsController.detailscreate=async(req,res)=>{
    try{
        let body = req.body
        let result=await detailsModel.create(body)
        if(result){
            return {status:true, statuscode:201,message:"details feild created !",data:result}
        }
            return{status:false,statuscode:400,message:"details feild not created "}
    }
    catch(err){
        console.log(err)
    }
}

detailsController.detailsfind=async(req,res)=>{
    try{
        
        let result=await detailsDal.getdetails(req?.query)
        if(result){
            return {status:true, statuscode:200,message:"details feild found !",data:result.data}
        }
            return{status:false,statuscode:400,message:"details feild not found "}
    }
    catch(err){
        console.log(err)
    }
}

detailsController.detailsfindid=async(req,res)=>{
    try{
        let detailsid=req.params.id
        let result=await detailsModel.findById(detailsid)
        if(result){
            return {status:true, statuscode:200,message:"details feild id  found !",data:result}
        }
            return{status:false,statuscode:400,message:"details feild  id not found "}
    }
    catch(err){
        console.log(err)
    }
}

detailsController.detailsupdate=async(req,res)=>{
    try{
        let detailsid=req.params.id
        let payload=req.body
        let result=await detailsModel.findByIdAndUpdate(detailsid,payload,{new:true})
        if(result){
            return {status:true, statuscode:200,message:"details feild updated !",data:result}
        }
            return{status:false,statuscode:400,message:"details feild not updated"}
    }
    catch(err){
        console.log(err)
    }
}

detailsController.detailsdeleted=async(req,res)=>{
    try{
        let detailsid=req.params.id
        let result=await detailsModel.findByIdAndDelete(detailsid,{new:true})
        if(result){
            return {status:true, statuscode:200,message:"details feild deleted !",data:result}
        }
            return{status:false,statuscode:400,message:"details feild not deleted"}
    }
    catch(err){
        console.log(err)
    }
}

module.exports=detailsController