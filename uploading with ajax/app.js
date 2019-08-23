const url = 'https://postman-echo.com/post';

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById('btnSubmit').addEventListener('click', upload);
}

//document.getElementById('output').textContent = 'Response received from server';


function upload(ev){
    ev.preventDefault(); //stop the form from submittion

    //create any header
    let h = new Headers();
    h.append('Accept', 'application/json');

    let fd = new FormData();
    fd.append('user-id', document.getElementById('user_id').value);
    let myFile = document.getElementById('avatar_img').files[0];
    fd.append('avartar', myFile, 'avartar.png');

    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'no-cors',
        body: fd
    });

    fetch(req)
        .then( (response)=>{
           document.getElementById('output').textContent = 'Response received from server';
        })
        .catch( (err)=>{
            console.log('ERROR', err.message);
        });
}