const db = require('../util/database');

module.exports = async function () {
	await db.execute(`
      CREATE TABLE IF NOT EXISTS posts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT,
          title VARCHAR(255),
          subtitle VARCHAR(255),
          firstParagraph TEXT,
          imageUrl TEXT,
          post TEXT,
          tags VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
	await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255),
          photoUrl VARCHAR(255),
          email VARCHAR(255),
          password VARCHAR(255)
      )
    `);
};
