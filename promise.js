let rand = () => Math.floor(Math.random()*10)+1;

let p1 = new Promise((resolve,reject) => { 
    //let errr =() => console.log('there is an error');
    let xo = rand();
    //resolve(xo);
    setTimeout(resolve, 1500, xo);
    
});

p1.then((ex) => {
    console.log(ex);
    return ex * 2;
}).then ((x) => {
    console.log(x+3);
}).catch( (exx) =>{
    console.log(rand());
});