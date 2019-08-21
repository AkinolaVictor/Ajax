// This is for the purpose of extracting email and usernames from an api
// The link is a ready made data containing details of users
const uri = 'http://jsonplaceholder.typicode.com/users';

// here we only need the method and mode options
// its get because we are onlu requesting data from the api, not updating, or doing other things
let options = {
    method: 'GET',
    mode: 'cors'
}
let req = new Request(uri, options);


fetch( req )
    .then( (response) => {
        if (response.ok){
           return response.json(); 
        }else {
            throw new Error('There is an error');
        }
        
    })
    .then((data) => {
        // here what is done is to select the ul 
        // and to also create a fragment to contain it
        let ul = document.querySelector('#users');
        let df = new DocumentFragment();
        //console.log(data);
        data.forEach((user)=>{
            // here what is done is to create create containers for the data
            // and to insert the data into the containers
            let li = document.createElement('li');
            let pn = document.createElement('p');
            let pue = document.createElement('p');
            pn.textContent= user.name;
            pue.textContent = '' + user.username + ' - ' + user.email;
            pn.className = 'name';
            pue.classList.add('info');
            li.appendChild(pn);
            li.appendChild(pue);
            df.appendChild(li);
        });
        ul.appendChild(df);
    })
    .catch( (err) => {
        console.log('ERROR; ', err.message);
    });
