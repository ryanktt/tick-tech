const Post = require('../models/post.js');


exports.getAdminAddPost = (req, res, next) => {
    let edit = req.query.edit;
    edit === 'false' ? edit = false : edit = true;
    let id = req.params.id;

    Post.findById(id)
    .then(post => {
        post = post[0][0];
        res.render('../views/add-post.ejs', {
            edit: edit, 
            post: post,
            pageTitle: 'Criar Postagem'
        });
    })
    .catch(err => {

    });
}




exports.postAdminAddPost = (req, res, next) => {
    const id = req.body.id;

    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const firstParagraph = req.body.firstParagraph;
    const imageUrl = req.body.imageUrl;
    const post = req.body.post;
    const tags = req.body.tags;

    const edit = req.query.edit;

    const newPost = new Post(title, subtitle, firstParagraph, imageUrl, post, tags);
    //NEW POST
    if (edit !== 'true') {
        newPost.save();
    } else {
    //EDIT POST
        newPost.editById(id);
    }
    

    
    
    


    res.redirect('/admin/panel');
}

exports.getAdminPanel = (req, res, next) => {
    
    Post.fetch(0, 12)
    .then(posts => {
        return posts;
        
    })
    .then(posts => {
        res.render('admin-panel', {
            posts: posts, 
            pageTitle: 'Painel de Admin'});
    })
    .catch(err => {
        console.log(err)
    })

   
}

exports.postDeletePost = (req, res, next) => {
    const postId = Number(req.body.id);
    Post.deleteById(postId)
    .then(log => {
        res.redirect('/admin/panel');
    })
    .catch(err => {
        console.log(err);
    })

}