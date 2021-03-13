const Post = require('../models/post.js');

exports.getShowPost = (req, res, next) => {
    const postId = req.params.id;
    Post.findById(postId)
    .then(post => {
        return post = post[0][0];
        
    })
    .then(post => {
        const tagArr = post.tags.split(',');
        
        return res.render('../views/post.ejs', {
            post: post, 
            tagArr: tagArr,
            pageTitle: post.title
        });
    })
    .catch(err => {
      next();
    })
    

    
} 

exports.getShowPosts = (req, res, next) => {
    function truncateString(str, num) {
        if (num > str.length){
          return str;
        } else{
          str = str.substring(0,num);
          return str+"...";
        }
      
      }
    Post.fetch(0, 12)
    .then(posts => {
        res.render('../views/index.ejs', {
            posts: posts,
            pageTitle: 'TickTeck',
            truncateString: truncateString
        })
    })
    .catch(err => {
        console.log(err);
    })
    
}

exports.getShowPostsSearch = (req, res, next)=> {
    const subject = req.body.subject;
    Post.search(subject)
    .then(posts => {
        res.render('../views/index.ejs', {
            posts: posts, 
            pageTitle: 'Search: ' + subject + ''
        });
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getDataLoad = (req, res, next) => {
    res.contentType('text/html')
    
    const loadCount = req.query.loadCount;
     
    Post.fetch(loadCount, 12)
    .then(posts => {
        
        res.send(posts)      
        
    })
}
