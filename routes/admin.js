const express = require('express');
const bodyParser = require('body-parser');

const adminController = require('../controllers/admin.js');

const router = express.Router();
const app = express();


router.get('/admin', adminController.getAdminAddPost);

router.post('/admin', adminController.postAdminAddPost);

router.get('/admin-panel', (req, res, next) => {
    res.render('admin-panel')
})

module.exports = router;