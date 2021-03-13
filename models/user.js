const db = require('../util/database');

class User {
    constructor(name, photoUrl, email, password) {
        this.name = name;
        this.photoUrl = photoUrl;
        this.email = email;
        this.password = password;
        
    }

    save() {
        return db.execute('INSERT INTO users (name, photoUrl, email, password) VALUES(?, ?, ?, ?)', 
        [this.name, this.photoUrl, this.email, this.password]);
    }

    static fetch() {
        return db.execute('SELECT * FROM users')
        .then(users => {
            users = users[0];
            return users
        })
        .catch(err => {
            console.log(err);
        })
    }

    static findByEmail(email) {
        return db.execute('SELECT * FROM users WHERE email = ?',
        [email]);
    }

    static findByAuth(email, password) {
        return db.execute('SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]);
    }
}


module.exports = User;