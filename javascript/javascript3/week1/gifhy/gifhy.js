
// https://api.giphy.com/v1/stickers/search?api_key=vwMiYSudtzSswVZqhOPRMxtUs93gvYXk&q=&limit=25&offset=0&rating=G&lang=en

document.getElementById('search').addEventListener('click',getJson);
function getJson(){   
     fetch('https://api.giphy.com/v1/gifs/search?api_key=vwMiYSudtzSswVZqhOPRMxtUs93gvYXk&q=cats&limit=25&offset=0&rating=G&lang=en')
    .then( res => res.json())
    .then(data => {
        searchGif(data)
        console.log( data)
    })    
};


function searchGif(data){

    for(i=0;i<data.data.length;i++){
        const image = document.createElement('img');
        output.appendChild(image);
        output.src=data.data[i].images.original.url;
    }
}