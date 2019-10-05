
const favDishes = ["chicken curry" , "Mutton curry", "Biryani", "pulav", "fried rice"];

myUl = document.querySelector('ul');

for(i=0; i< favDishes.length; i++){
    const newLi = document.createElement('li');
    newLi.textContent = favDishes[i];
    myUl.appendChild(newLi);
}

// const image = document.createElement('img');
// image.