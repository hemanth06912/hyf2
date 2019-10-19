 // warmup 1:
 
 function delayString(delay, stringToLog){
    setTimeout(() => console.log(stringToLog),delay *1000);
}

console.log(delayString(5,"I am hemanth"));

// warmup 2:

const btn= document.getElementById('button');

btn.addEventListener('click',delayString());

//warmup 3:

const earthLogger= () => console.log("earth");
const saturnLogger= () => console.log("saturn");

function  planetLogFunction(planetFunction){

     return planetFunction()};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//warmup 4:

const actualLoc =document.getElementById('location');
actualLoc.addEventListener('click',getLocation);

function getLocation() {
      navigator.geolocation.getCurrentPosition(showPosition); 
  }
      
  function showPosition(position) {
    actualLoc.innerHTML="This is in the latitude: " + position.coords.latitude + 
      "<br>This is in the longitude: " + position.coords.longitude;
  }

//warmup 5:

 function runAfterDelay (delay, callback) {
    setTimeout(callback, delay * 1000);
   }
runAfterDelay(4, () => console.log('logged after 4 seconds'));


//warmup 6:

const double = document.querySelector('button');

double.addEventListener('dblclick', ()=> console.log('Double clicked'));

//warmup 7:

function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
    if(shouldTellFunnyJoke ==='true'){
       return logFunnyJoke();
    }else if (shouldTellFunnyJoke ==='false'){
       return logBadJoke();
    }
}

    function logFunnyJoke() {
        return `There’s no menu: You get what you deserve.`}
    function logBadJoke() {
        return `Those who can count and those who can’t.`}    

console.log(jokeCreator(true,logFunnyJoke(),logBadJoke()));       
