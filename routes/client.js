const express = require('express');
const bodyParser = require('body-parser');

const clientController = require('../controllers/client.js');

const router = express.Router();
const app = express();


router.get('/', clientController.getShowPosts);

router.get('/post', clientController.getShowPost);



module.exports = router;