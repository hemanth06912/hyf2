
// https://api.giphy.com/v1/stickers/search?api_key=vwMiYSudtzSswVZqhOPRMxtUs93gvYXk&q=&limit=25&offset=0&rating=G&lang=en

document.getElementById('search').addEventListener('click',getJson);
function getJson(){ 
    const input=document.querySelector('#giphy').value 
    const number = document.querySelector('#number').value 
     fetch('https://api.giphy.com/v1/gifs/search?api_key=vwMiYSudtzSswVZqhOPRMxtUs93gvYXk&q='+ input +'&limit='+ number +'&offset=0&rating=G&lang=en')
    .then( res => res.json())
    .then(data => {
        searchGif(data)
        console.log( data)
    })    
};


function searchGif(data){

    for(let i=0; i<data.data.length; i++){
        const gifsy = document.querySelector('#content');
        let h3 = document.createElement("h3");
        h3.textContent = data.data[i].title;
        gifsy.appendChild(h3);
        const image = document.createElement('img');
        gifsy.appendChild(image);
        image.src=data.data[i].images.fixed_height.url;
    }
}
