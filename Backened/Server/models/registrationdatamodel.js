const mongoose=require("mongoose")
const registrationschema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const registrationdata= mongoose.model("registrationdata",registrationschema)
module.exports=registrationdata