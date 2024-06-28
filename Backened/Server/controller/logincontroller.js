const logindata=require("../models/logindatamodel")
async function loginregisterData(req,res)
{
  const{email,password}=req.body
  const alldata=await logindata.create({
    email,password
  })
res.json({logindata:alldata})
}
module.exports=loginregisterData