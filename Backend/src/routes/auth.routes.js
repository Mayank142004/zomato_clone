const express = require('express');
// const { route } = require('../app');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/health', (req, res) => {
    res.json({ ok: true });
});

router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);


module.exports= router;