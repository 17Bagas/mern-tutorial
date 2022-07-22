const express = require('express')
const app = express()
const { Admin } = require('/backend/controllers/adminController')
const { User } = require('/backend/controllers/userController')

const ROLE ={
	Admin: 'Admin',
	User: 'User'
}

module.exports={ ROLE }