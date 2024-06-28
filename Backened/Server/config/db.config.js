const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/test')
const mongodb=mongoose.connection
mongodb.once('open',()=>
{
    console.log("Connected with mongo")
})
mongodb.on('error',()=>
{
    console.log("Not Connected with mongo")
})