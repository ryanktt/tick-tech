const express = require('express');

const adminController = require('../controllers/admin.js');
const isAuth = require('../middleware/check-auth.js');

const router = express.Router();


router.get('/add-post/:id', isAuth, adminController.getAdminAddPost);

router.post('/add-post', isAuth, adminController.postAdminAddPost);

router.get('/panel', isAuth, adminController.getAdminPanel);

router.post('/panel', isAuth, adminController.postDeletePost);

module.exports = router;