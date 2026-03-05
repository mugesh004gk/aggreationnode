const express=require("express")
const app= express()
app.use(express.json())
const port = 4000
const mongoose=require("mongoose")

const URL = "mongodb+srv://gkmugesh2004_db_user:qW88MXliYhfm5qv4@cluster0.evjdyui.mongodb.net/?appName=Cluster0"
const userRouter=require("./router/userRouter")
const detailsRouter=require("./router/detailsRouter")

mongoose.connect(URL).then(()=>{
    console.log("db is connected ")
})
.catch((err)=>{
    console.log(err)
})
//qW88MXliYhfm5qv4

app.use("/user",userRouter)
app.use("/dls",detailsRouter)

app.listen(port,()=>{
    console.log(`port server at ${port}`)
})