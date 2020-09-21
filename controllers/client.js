const Post = require('../models/admin.js');

exports.getShowPost = (req, res, next) => {
    res.render('../views/post.ejs')
}

exports.getShowPosts = (req, res, next) => {
    res.render('../views/index.ejs')
}

