function translateOneByOne(){
    moveElement(document.querySelector('li'), {x: 20, y: 300})
    .then(() => {
        console.log('red Element has been moved');
    })
    moveElement(document.querySelector('li'), {x: 400, y: 300})
    .then(() => {
        console.log('red Element has been moved');
    })
    moveElement(document.querySelector('li'), {x: 400, y: 20})
    .then(() => {
        console.log('red Element has been moved');
    })
    
}

translateOneByOne();