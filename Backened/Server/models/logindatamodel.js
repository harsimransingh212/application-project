const mongoose=require("mongoose")
const loginschema= new mongoose.Schema({
    email:String,
    password:String
})
const logindata= mongoose.model("logindata",loginschema)
module.exports=logindata