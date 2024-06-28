const express=require('express')
const postloginData=require('../controller/logincontroller')
const loginregisterData = require('../controller/logincontroller')
const router=express.Router()
router.post('/login',loginregisterData)
module.exports=router