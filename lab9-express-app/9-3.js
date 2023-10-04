const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const url = 'mongodb://127.0.0.1:27017/university';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
};

expressApp.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next();
});
expressApp.use(expressFunction.json());
expressApp.use((req,res,next)=>{
    mongoose.connect(url,config)
    .then(()=>{
        console.log('connected to MogoDB...');
        next();
    })
    .catch(err=>{
        console.log('Cannot connect to MogoDB');
        res.status(501).send('Cannot connect to MongoDB')
    });
});

expressApp.use('/user', require('./routes/user'))
expressApp.use('/login', require('./routes/signin'))
expressApp.use('/api', require('./api/products'))

expressApp.listen(3000, function(){
    console.log('Listening on port 3000')
});


// http://localhost:3000/user/signup
// {
//     "username": "B6310646",
//     "password": "1234"
//   }