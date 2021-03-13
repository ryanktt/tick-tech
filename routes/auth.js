const express = require('express');

const authController = require('../controllers/auth.js');

const router = express.Router();

router.get('/sign-up', authController.getSignUp);

router.post('/sign-up', authController.postSignup);

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);



module.exports = router;