document.getElementById('city').addEventListener('click',getJson);
function getJson(){
   const input = document.getElementById('search').value.toLowerCase();
   if(input){
       fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric&appid=df4293c7fec098bf57729b247d0dd79a')
    .then( res => res.json())
    .then(data=> {
       document.getElementById('place').innerHTML= data.name
       document.getElementById('icon').src="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
       document.getElementById('output').innerHTML =
       ` Temperature: ${data.main.temp} C <br>
        Wind speed : ${data.wind.speed} m/s<br>
        clouds : ${data.clouds.all} % <br>
        ${data.weather[0].description} <br>
        Sunrise and sunset time: ${new Date(data.sys.sunrise*1000).toLocaleTimeString()} and ${new Date(data.sys.sunset*1000).toLocaleTimeString()}<br>
       `  
    })    
   } else if (input === ""){
       document.getElementById('return').textContent= "Enter city";
   } 
};



