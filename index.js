require('dotenv').config()
const express=require('express');
const app=express()
const port=process.env.PORT

app.get('/',(req,res)=>{
    res.send('Helloss World')
})

app.listen(port,()=>{
    console.log("mil gyaaa",port)
})