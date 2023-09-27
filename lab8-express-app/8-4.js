var expressFunction = require('express')
var expressApp = expressFunction()
expressApp.use(expressFunction.json());

const students = [
    {stdid: 'B6310646',name: 'Supanan Rueangsook'},
    {stdid: 'B6312345',name: 'alexa beth'},
];


expressApp.post('/api/resource/students', function (req ,res){
    const stdid = req.body.stdid;
    const name = req.body.name;
    if(stdid.length == 8){
        const student = {
            stdid: stdid,
            name: name
        }
        students.push(student);
        res.status(200).send(student)
    }else{
        res.status(400).send('Error cannot add student!');
    }

    // http://localhost:3000/api/resource/students
});

expressApp.listen(3000,function(){
    console.log('Listening on port 3000');
})