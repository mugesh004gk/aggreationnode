const express=require("express")
const app= express()
app.use(express.json())
const port = 4000
const mongoose=require("mongoose")
const URL = "mongodb://localhost:27017/"
const userRouter=require("./router/userRouter")
const detailsRouter=require("./router/detailsRouter")

mongoose.connect(URL).then(()=>{
    console.log("db is connected ")
})
.catch((err)=>{
    console.log(err)
})


app.use("/user",userRouter)
app.use("/dls",detailsRouter)

app.listen(port,()=>{
    console.log(`port server at ${port}`)
})