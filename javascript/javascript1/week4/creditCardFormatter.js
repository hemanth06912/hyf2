
// characterFrequencies:

// function characterFrequencies(string){

// }


// function characterFrequencies(string){
//     const spString=string.split("");
//      const characters = [];
//      for(let i=0;i<spString.length;i++){
//      characters.push({characters :spString[i],
//          count:1});
//    }
//      return characters;
    
// }
// console.log(characterFrequencies("happy"));

function characterFrequencies(string){
    const spString=string.split("");
     const characters = [];
     for(let i=0;i<spString.length;i++){
    if (spString.includes(spString[i])){
        characters.push({characters :spString[i],count:1});
    }
     }
     return characters;
   
}
console.log(characterFrequencies("happy"));



