const db = require('../util/database.js')

class Post{
    constructor(userId, title, subtitle, firstParagraph, imageUrl, post, tags) {
        this.userId = userId;
        this.title = title;
        this.subtitle = subtitle;
        this.firstParagraph = firstParagraph;
        this.imageUrl = imageUrl;
        this.post = post;
        this.tags = tags;
    }

    save() {
        return db.execute('INSERT INTO posts (user_id, title, subtitle, firstParagraph, imageUrl, post, tags) VALUES(?, ?, ?, ?, ?, ?, ?)', 
        [this.userId, this.title, this.subtitle, this.firstParagraph, this.imageUrl, this.post, this.tags]);
    }

    editById(id) {
        return db.execute('UPDATE posts SET title = ?, subtitle = ?, firstParagraph = ?, imageUrl = ?, post = ?, tags = ? WHERE id = ?', 
        [this.title, this.subtitle, this.firstParagraph, this.imageUrl, this.post, this.tags, id]);
    }

    static search(subject) {
        return db.execute("SELECT * FROM posts WHERE title LIKE CONCAT('%', ?, '%') OR tags LIKE CONCAT('%', ?, '%')", [subject, subject])
        .then(posts => {
            posts = posts[0].reverse();
            return posts;
        })
    }

    static fetch(start, amount) {
        return db.execute('SELECT * FROM posts ORDER BY id DESC LIMIT ?,?', [start, amount])
        .then(posts => {
            posts = posts[0]
            return posts;
        })

    }

    static fetchById(start, amount, userId) {
        return db.execute('SELECT * FROM posts WHERE user_id = ? ORDER BY id DESC LIMIT ?,?', [userId, start, amount])
        .then(posts => {
            posts = posts[0]
            return posts;
        })

    }
 
    static deleteById(id) {
        return db.execute('DELETE FROM posts WHERE id = ?', [id]);
    }

    static findById(id) {
        return db.execute('SELECT * FROM posts WHERE id = ?', [id]);
    }
}

module.exports = Post;



