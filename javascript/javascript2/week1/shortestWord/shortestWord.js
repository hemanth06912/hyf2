// Find the shortest word :

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const wordsLength = [];
const smallestLength =Math.min(...wordsLength);
function findWordLength(danishWords){
    for(i=0;i<danishWords.length;i++){
        if(danishWords[i].length >=1){
           wordsLength.push(danishWords[i].length);   
        }    
    }
    return wordsLength;
} 

// function findShortWord(){
//     for(i=0;i<danishWords.length;i++){
//     if(danishWords[i].length === smallestLength){
    
//     }
//     return `The smallest word is ${danishWords[i]}`;
// }
// }
console.log(findWordLength(danishWords));
const x = console.log(Math.min(...wordsLength));
// console.log(findShortWord());