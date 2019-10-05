
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'click me';
const body = document.querySelector('body');
 body.appendChild(input);
 body.appendChild(button); 

 const para = document.createElement('p');
 body.appendChild(para);

 const List = [Alligator,Fish,Pig ,Eagle,Panda,Whale,Elephant,Panther,Wolf,Falcon,Peacock,Wolverine];
const SpiritAnimalNames = List[Math.floor(Math.random(List) * 12)]; 
