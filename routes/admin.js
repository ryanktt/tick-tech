const express = require('express');
const bodyParser = require('body-parser');

const adminController = require('../controllers/admin.js');

const router = express.Router();
const app = express();


router.get('/add-post/:id', adminController.getAdminAddPost);

router.post('/add-post', adminController.postAdminAddPost);

router.get('/panel', adminController.getAdminPanel);

router.post('/panel', adminController.postDeletePost);

module.exports = router;