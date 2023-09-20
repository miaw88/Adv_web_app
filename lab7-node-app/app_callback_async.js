const myRequest = (message, callback)=>{
    console.log('---start---')
    const response = message+' done!!'
    const error = undefined;
    setTimeout(()=> {
        const result = callback(error, response);
        console.log(result)
    }, 2000);
    console.log('---finish---')
}

const myCallback = (error, res)=>{
    if(error){
        return 'Error '+error; 
    }
    else{
        return res;
    }
}

myRequest('Hello World' , myCallback);