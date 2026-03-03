const detailsModel=require("../model/detailsModel")
const detailsDal=new Object()

detailsDal.getdetails=async(req,res)=>{
    try{
        let query=[{deleted:false}]
        let page = req?.page ? req?.page :0;
         let limit = req?.limit ? req?.limit :10;
         let skip =page *limit;

        let result =await detailsModel.aggregate()
        .match({$and :query})
        .lookup({
            from:"userinfos",
            localField:"userId",
            foreignField:"_id",
            as:"userdetails"
        })

        .unwind({path:"$userdetails",preserveNullAndEmptyArrays:true})
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .exec()
         if(result){
            return {status:true ,data:result}
         }
            return {status:false,data :{}}
    }
    catch(err){
        console.log(err)
    }
}

module.exports=detailsDal