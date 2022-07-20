const express = require('express')
const app = express()
const { Admin, AdminId } = require('/backend/controllers/adminController')
const { User, UserId } = require('/backend/controllers/userController')

const ROLE ={
	ADMIN: 'Admin',
	USER: 'User'
}

module.exports={
    ROLE: ROLE,
    admin:[
        
    ]
}