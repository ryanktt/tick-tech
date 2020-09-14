const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();


router.get('/', (req, res, next) => {
    res.render('../views/index.ejs')
})


module.exports = router;