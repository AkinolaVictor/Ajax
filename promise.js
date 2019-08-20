let rand = () => Math.floor(Math.random()*10)+1;

// There are other functionalities like "all" and "race", and so on


let p1 = new Promise((resolve,reject) => { 
    //let errr =() => console.log('there is an error');
    let xo = rand();
    //resolve(xo);
    setTimeout(resolve, 1500, xo);    
});

p1.then((ex) => {
    console.log(ex);
    let m;
    return ex * 2;
}).then ((x) => {
    console.log(x+3);
}).catch( (exx) =>{
    console.log(rand());
});
