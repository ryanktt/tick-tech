const User = require('../models/user.js');

const bcrypt = require('bcrypt');


exports.getLogin = (req, res, next) => {
    res.render('../views/auth/login.ejs', {
        path: 'login',
        pageTitle: 'Login',
        errorMessage: req.flash('errorMessage')
    })

}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    return User.findByEmail(email)
    .then(user => {
        user = user[0][0];
        if (!user) {
            req.flash('errorMessage', 'Email ou senha inválidos.');
            return res.redirect('/auth/login');

        }

        return bcrypt.compare(password, user.password)
        .then(doMatch => {
            if (doMatch) {
                req.session.user  = user;
                req.session.isLoggedIn = true;
                if (user.id === 1) {
                    req.session.owner = true;
                    
                }
                 return req.session.save(err => { 
                    console.log(err);
                    res.redirect('/')
                })

            }
            
        })
    })
    .catch(err => {
        console.log(err);
    })
    
}


exports.getSignUp = (req, res, next) =>{
  
    res.render('../views/auth/sign-up', {
        pageTitle: 'Sign Up',
        errorMessage: req.flash('errorMessage'),
        path: 'sign-up'
    });
    
}

exports.postSignup = (req, res, next) => {
    const name = req.body.name;
    const photoUrl = req.body.photo;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    
    User.findByEmail(email)
    .then(user => {
        user = user[0];
        /* 
        for(let i = 0; i < users.length; i++) {
            if(users[i].email === email) {
                req.flash('errorMessage', 'Seu email já está em uso');
                return res.redirect('/auth/sign-up');

            } 
        }*/
        if(user.length > 0 ) {
            req.flash('errorMessage', 'Seu email já foi cadastrado.');
            return res.redirect('/auth/sign-up');

        } 
        
        if (password !== confirmPassword) {
            req.flash('errorMessage', 'As senhas não condizem.')
            return res.redirect('/auth/sign-up');
        }
 
        return bcrypt.hash(password, 12)
        .then(hashedPassword => {

            const user = new User(name, photoUrl, email, hashedPassword);
            user.save()
            .then(result => {
                return res.redirect('/auth/login');
            })
            .catch(err => {
                console.log(err)
            })
        })
        
    })
    .catch(err => {
        console.log(err);
    })


}