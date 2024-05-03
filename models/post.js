const db = require('../util/database.js');

class Post {
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
		return db.execute(
			`INSERT INTO posts (user_id, title, subtitle, firstParagraph, imageUrl, post, tags) VALUES (${this.userId}, '${this.title}', '${this.subtitle}', '${this.firstParagraph}', '${this.imageUrl}', '${this.post}', '${this.tags}')`,
		);
	}

	editById(id) {
		return db.execute(
			`UPDATE posts SET title = '${this.title}', subtitle = '${this.subtitle}', firstParagraph = '${this.firstParagraph}', imageUrl = '${this.imageUrl}', post = '${this.post}', tags = '${this.tags}' WHERE id = ${id}`,
		);
	}

	static search(subject) {
		return db
			.execute(
				`SELECT * FROM posts WHERE title LIKE CONCAT('%', '${subject}', '%') OR tags LIKE CONCAT('%', '${subject}', '%')`,
			)
			.then(([rows, fields]) => {
				return rows.reverse();
			});
	}

	static fetch(start, amount) {
		const sql = `SELECT * FROM posts ORDER BY id DESC LIMIT ${parseInt(
			start,
		)}, ${parseInt(amount)}`;
		return db.execute(sql).then(([rows, fields]) => {
			return rows;
		});
	}

	static fetchById(start, amount, userId) {
		const sql = `SELECT * FROM posts WHERE user_id = ${userId} ORDER BY id DESC LIMIT ${parseInt(
			start,
		)}, ${parseInt(amount)}`;
		return db.execute(sql).then(([rows, fields]) => {
			return rows;
		});
	}

	static deleteById(id) {
		return db.execute(`DELETE FROM posts WHERE id = ?`, [id]);
	}

	static findById(id) {
		if (id) return db.execute(`SELECT * FROM posts WHERE id = ?`, [id]);
		return;
	}
}

module.exports = Post;
