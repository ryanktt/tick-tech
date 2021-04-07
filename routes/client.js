const express = require('express');

const clientController = require('../controllers/client.js');

const router = express.Router();



router.get('/', clientController.getShowPosts);

router.post('/search', clientController.postShowPostsSearch)

router.get('/post/:id', clientController.getShowPost);

router.get('/data', clientController.getDataLoad); 

module.exports = router;