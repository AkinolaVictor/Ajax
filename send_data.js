const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts';

let formdata = new FormData();
formdata.append('userid', 3);
formdata.append('Title','This is my title');
formdata.append('body', 'This is the body text of the post');

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
    })
    .catch((ex)=>{
       console.log('ERROR!!!', err.message);
    });