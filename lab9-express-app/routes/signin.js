const expressFunction = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = expressFunction.Router();

const key = 'MY_KEY';

var Schema = require('mongoose').Schema;

const userSchema = Schema({
    username: String,
    password: String,
}, {
    collection: 'users'
})

let User
try {
    User = mongoose.model('users');
} catch (error) {
    User = mongoose.model('users', userSchema);
}

const compareHash = async(plainText, hashText) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hashText, (err, data) => {
            if (err) {
                reject(new Error('Error bcrypt compare'))
            } else {
                resolve({status: data});
            }
        })
    })
}

const findUser = (username) => {
    return User.findOne({ username: username })
        .then((data) => {
            if (data) {
                return {
                    id: data._id,
                    username: data.username,
                    password: data.password
                };
            } else {
                throw new Error('User not found');
            }
        })
        .catch((error) => {
            throw error;
        });
}

router.route('/signin')
    .post(async (req, res) => {
        const playload = {
            username: req.body.username,
            password: req.body.password
        }

        console.log(playload)

        try {
            const result = await findUser(playload.username);
            const loginStatus = await compareHash(playload.password, result.password);

            const status = loginStatus.status;

            if (status) {
                const token = jwt.sign(result, key, {expiresIn: 60*5});
                res.status(200).json({result, token, status});
            } else {
                res.status(200).json({status});
            }

        } catch (error) {
            res.status(404).send(error);
        }
    })

module.exports = router

// http://localhost:3000/login/signin