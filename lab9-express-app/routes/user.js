var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = require('mongoose').Schema;
const userScheme = Schema({
    username: String,
    password:String,
}, {
    collection:'users'
});

let user 
try {
    User = mongoose.model('users')
} catch (error){
    User = mongoose.model('users',userScheme);
}

const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertUser = (dataUser) => {
    return new Promise((resolve, reject) => {
        var new_user = new User({
            username: dataUser.username,
            password: dataUser.password
        });
        new_user.save()
            .then((data) => {
                resolve({ message: 'Sign up successfully' });
            })
            .catch((err) => {
                reject(new Error('Cannot insert user to DB'));
            });
    });
}

router.route('/signup')
    .post((req, res) => {
        makeHash(req.body.password)
            .then((hashText) => {
                const payload = {
                    username: req.body.username,
                    password: hashText,
                }
                console.log(payload);
                insertUser(payload)
                    .then((result) => {
                        console.log(result);
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).json({ error: err.message });
                    });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ error: err.message });
            });
    });

module.exports = router;