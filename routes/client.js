const express = require('express');
const bodyParser = require('body-parser');

const clientController = require('../controllers/client.js');

const router = express.Router();
const app = express();


router.get('/', clientController.getShowPosts);

router.post('/search', clientController.getShowPostsSearch)

router.get('/post/:id', clientController.getShowPost);

router.get('/data', clientController.getDataLoad); 

module.exports = router;