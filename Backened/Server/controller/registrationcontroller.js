const { create } = require('domain')
const registrationdata=require('../models/registrationdatamodel')

async function postregisterData(req,res)
{
  const{name,email,password}=req.body
  const alldata=await registrationdata.create({
    name,email,password
  })
res.json({registerdata:alldata})
}
module.exports=postregisterData