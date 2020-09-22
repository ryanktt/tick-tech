const { search } = require('../models/post.js');
const Post = require('../models/post.js');

exports.getShowPost = (req, res, next) => {
    const postId = req.params.id;
    Post.findById(postId)
    .then(post => {
        return post = post[0][0];
         
    })
    .then(post => {
        const tagArr = post.tags.split(',');
        res.render('../views/post.ejs', {post: post, tagArr: tagArr});
    })
    .catch(err => {
        
    })

    
}

exports.getShowPosts = (req, res, next) => {
    Post.fetch()
    .then(posts => {
    res.render('../views/index.ejs', {posts: posts})
    })
    
}

exports.getShowPostsSearch = (req, res, next)=> {
    const subject = req.body.subject;
    console.log(subject)
    Post.search(subject)
    .then(posts => {
        console.log(posts)
        res.render('../views/index.ejs', {posts: posts});
    })
    .catch(err => {
        console.log(err);
    })
}


