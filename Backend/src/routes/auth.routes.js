const express = require('express');
const { route } = require('../app');
const authController = require('../controllers/auth.controller');

const router = express.Router;

route.post('/user/register',authController.registerUser)
route.post('/user/register',authController.loginUser)


module.exports= router;