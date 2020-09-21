const Post = require('../models/admin.js');

exports.getAdminAddPost = (req, res, next) => {
    res.render('../views/admin.ejs');
}

exports.postAdminAddPost = (req, res, next) => {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const firstParagraph = req.body.firstParagraph;
    const imageUrl = req.body.imageUrl;
    const post = req.body.post;
    const tags = req.body.tags;

    const newPost = new Post(title, subtitle, firstParagraph, imageUrl, post, tags);
    newPost.save();
    
}