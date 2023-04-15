const express = require('express')
const User=require('../models/user')

const router = express.Router()



router.post('/signup', signupUser)
router.post('/login', loginUser)

module.exports = router;

