//learning ajax is much fun 
let rand = () => Math.floor(Math.random()*10)+1;

// There are other functionalities like "all" and "race", and so on
//They would be coming up soon
//its all going to work fine


let p1 = new Promise((resolve,reject) => { 
    //let errr =() => console.log('there is an error');
    let xop = rand();
    //resolve(xop);
    setTimeout(resolve, 1000, xop);    
});

// using the promise here
p1.then((ex) => {
    let working='Your code is working';
    console.log(working);
    console.log(ex);
    let m;
    m= ex + 7;
    return ex * 2;
}).then ((x) => {
    console.log(x+3);
    return x;
}).then((oo)=>{
    oo = oo + ' Equal';
    console.log(oo);
}).then(()=>{
     console.log('just for test');
     console.log('just for test2');
}).catch( (exx) =>{
    console.log(rand());
});
