var expressFunction = require('express')
var expressApp = expressFunction()

expressApp.get('/api/resource', function (req ,res){
    // http://localhost:3000/api/resource/
    res.status(200).send('Hello World');
})

expressApp.listen(3000,function(){
    console.log('Listening on port 3000');
})