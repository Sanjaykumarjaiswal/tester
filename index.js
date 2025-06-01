const express = require('express')
const app = express()

app.get("/hello",(req,res)=>{
    res.json({
        message:"hello mr sanjay"
    })
})

app.listen(8080)