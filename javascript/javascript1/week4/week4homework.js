// // Fizzbuzz :

// const numbers = [];
// function fizzBuzz(){
//    for(i=1;i<=100;i++){
//     if(i%3 ==0 && i%5 ==0){
//      numbers.push("FizzBuzz");
//     }else if (i%3 ==0){
//      numbers.push("Fizz");
//     }else if (i%5 ==0){
//      numbers.push("Buzz");
//     }else
//       numbers.push(i);
//     }
//     return numbers;
// }
// console.log(fizzBuzz());

// sentiment Analyzer :

// const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

// console.log(sentimentScoreObject); 

function getSentimentScore(command){
    const spCommand = command.split(" ");
    const positive = ["super","awesome","super","good","nice","extraordinary"];
    const negative = ["bad","not clear","worse","fail"];
    const positiveWords = [];
    const negativeWords = [];

    for(i=0; i<spCommand.length ; i++){
      if(spCommand[i] === positive[i]){
        positiveWords.push(spCommand[i]);
        return `event = {
          score : ${positiveWords.length}, 
          positive words : ${spCommand[i]}}`;
      }else if(spCommand[i] === negative[i]){
        negativeWords.push(spCommand[i]);
        return `event = {negative words : ${spCommand[i]}}`;
    }

}
}

console.log(getSentimentScore("I am a good or bad person"));