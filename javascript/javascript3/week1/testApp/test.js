document.getElementById('img').addEventListener('click',getJson);
function getJson(){   
     fetch('https://dog.ceo/api/breeds/image/random')
    .then( res => res.json())
    .then(data=> {
     console.log(data)
     document.getElementById('output').src = data.message;
    })    
};



