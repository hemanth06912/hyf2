    const redBox = document.querySelector('ul.marks li:nth-child(1)');
    const blueBox = document.querySelector('ul.marks li:nth-child(2)');
    const greenBox = document.querySelector('ul.marks li:nth-child(3)');
    const boxes = [redBox, blueBox, greenBox];




function translateOneByOne(){
    moveElement(redBox,{x: 20, y: 300 })
    .then(()=> {
        console.log('red Element has been moved')
    })
    .then(()=>moveElement(blueBox,{x: 400, y: 300 }))
    .then(() => {
        console.log('blue Element has been moved')
    })
    .then(()=>moveElement(greenBox,{x: 400, y: 20 }))
    .then(() => {
        console.log('green Element has been moved')
    })
    
}

translateOneByOne();
const promise1= moveElement(redBox,{x: 20, y: 300 });
const promise2= moveElement(blueBox,{x: 400, y: 300 });
const promise3= moveElement(blueBox,{x: 400, y: 20 });

function translateAllAtOnce(){
    Promise.all([promise1,promise2,promise3])
    .then(()=>console.log('All elements are moved'))
}

translateAllAtOnce();