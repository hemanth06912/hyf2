const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const myUl = document.querySelector('ul')
for(i=0; i<podcasts.length;i++){
    const newLi = document.createElement('li');
    const newH1 = document.createElement('h1');
    newH1.textContent = podcasts[i].name;
    newLi.appendChild(newH1);
    if(podcasts[i].imageUrl ){
        const image = document.createElement('img');
        newLi.textContent = podcasts[i].imageUrl;
    }
    myUl.appendchild();
}   