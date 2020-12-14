const express=require('express')
const app=express()
app.get('/',(rep,res)=>{
    res.send("hello express")

})
const port=process.env.port||3000
app.listen(port)