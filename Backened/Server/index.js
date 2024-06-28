const express =require('express')
const app=express()
const db=require('./config/db.config')
const cors=require("cors")
const { METHODS } = require('http')
const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())
app.get('/',(req,res)=>
{
    res.send("Hello From Homepage")
})
app.get('/about',(req,res)=>
    {
        res.send("Hello From About Homepage")
    })

app.use('/registeruser',require('./routes/registrationroutes'))
app.use('/loginuser',require('./routes/loginroutes'))
app.listen(7000,()=>
    console.log("Server started on 8000")
)