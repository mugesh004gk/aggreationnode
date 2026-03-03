const mongoose=require("mongoose")
const {Schema}=require("mongoose")
const { type } = require("os")

const detailsSchema=new Schema({
    dob:{type:Date,default:null},
    collegedtls:{type:String,default:null},
    deleted:{type:Boolean,default:false},
    address:{type:String,default:null},
    branch:{type:String,default:null},
    userId:{type:Schema.Types.ObjectId,default:null}
})

module.exports=mongoose.model("useriddetails",detailsSchema)