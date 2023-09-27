var expressFunction = require('express')
var expressApp = expressFunction()

const students = [
    {stdid: 'B6310646',name: 'Supanan Rueangsook'},
    {stdid: 'B6312345',name: 'alexa beth'},
];

expressApp.get('/api/resource/students/:stdid', function (req ,res){
    const stdid = req.params.stdid;
    if(stdid == 'B6310646'){
        res.status(200).send(students[0]);
    }
    else if(stdid == 'B6312345'){
        res.status(200).send(students[1]);
    }
    else{
        res.status(404).send('Error 404 not found');
    }
    // http://localhost:3000/api/resource/students/:stdid
})

expressApp.listen(3000,function(){
    console.log('Listening on port 3000');
})