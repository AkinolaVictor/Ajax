let rand = () => Math.floor(Math.random()*10)+1;

// There are other functionalities like "all" and "race", and so on
//They would be coming up soon


let p1 = new Promise((resolve,reject) => { 
    //let errr =() => console.log('there is an error');
    let xo = rand();
    //resolve(xo);
    setTimeout(resolve, 1000, xo);    
});

p1.then((ex) => {
    console.log(ex);
    let m;
    m= ex + 2;
    return ex * 2;
}).then ((x) => {
    console.log(x+3);
    return x;
}).then((oo)=>{
    oo = oo + ' Equal'
}).catch( (exx) =>{
    console.log(rand());
});
