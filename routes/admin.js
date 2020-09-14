const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();


router.get('/admin', (req, res, next) => {
    res.render('../views/admin.ejs');
})


module.exports = router;