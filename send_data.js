//here we are learning how to send data online/or to an API
const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts';

//this entails the data to be sent, you put it in a form
//the for is then sent online
let formdata = new FormData();
formdata.append('userid', 3);
formdata.append('Title','This is my title');
formdata.append('body', 'This is the body text of the post');
formdata.append('Description', 'it helps to make you know more about things');
formdata.append('more', 'you can add lot more');

//the options
let options= {
    method: 'POST',
    mode: 'cors',
    body: formdata
};
let req = new Request(uri, options);

fetch(req)
    .then((response)=>{
        if (response.ok){
            return response.json();
        }else{
            throw new Error('BAD');
        }
    })
    .then((json)=>{
        console.log(data);
        if (data)
            console.log('yes');
            
    })
    .catch((ex)=>{
       console.log('ERROR!!!', err.message);
    });
