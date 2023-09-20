const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        let sid ='B6310646';
        if(sid){
            resolve({id: sid, name: 'Supanan'});
        }
        else{
            reject(new Error('Eror 404 Bad Request'));
        }
    }, 1000);
})

p.then(result =>{
    console.log(result);
})
.catch(function(err){
    console.error(err);
})