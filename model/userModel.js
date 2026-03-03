const mongoose=require("mongoose")
const {Schema}=require("mongoose")

const userSchema=new Schema({
    name:{type:String,default:null},
    userid:{type:String,default:null},
    deleted:{type:Boolean,default:false},
    phonenumber:{type:Number,default:0}
})

module.exports=mongoose.model("userinfo",userSchema)