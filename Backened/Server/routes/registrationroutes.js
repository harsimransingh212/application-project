const express=require('express')
const postregisterData=require('../controller/registrationcontroller')
const router=express.Router()
router.post('/registration',postregisterData)
module.exports=router