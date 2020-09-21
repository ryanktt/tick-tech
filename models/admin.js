const db = require('../util/database.js')

class Post{
    constructor(title, subtitle, firstParagraph, imageUrl, post, tags) {
        this.title = title,
        this.subtitle = subtitle,
        this.firstParagraph = firstParagraph,
        this.imageUrl = imageUrl,
        this.post = post,
        this.tags = tags
    }

    save() {
        return db.execute('INSERT INTO posts (title, subtitle, firstParagraph, imageUrl, post, tags) VALUES(?, ?, ?, ?, ?, ?)', 
        [this.title, this.subtitle, this.firstParagraph, this.imageUrl, this.post, this.tags]);
    }

    static fetch() {
        return db.execute('SELECT * FROM posts');
    }

    static deleteById(id) {
        return db.execute('DELETE * FROM post WHERE posts.id = ?', [id]);
    }

    static findById(id) {
        return db.execute('SELECT * FROM post WHERE posts.id = ?', [id]);
    }
}

module.exports = Post;



