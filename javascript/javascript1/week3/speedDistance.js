// const travelInformation = {
//     speed: 50,
//     destinationDistance: 432,
//   };
  
//   const travelTime = notThisFunctionName(travelInformation);
//   console.log(time); // 4 hours and 42 minutes

// timeConvertor
 
// Speed distance :

 function timeConvert(speed, destinationDistance) { 
    const time = (destinationDistance/speed);
    const rhours = Math.floor(time);
    const minutes = (time - rhours) * 60;
    const rminutes = Math.round(minutes);
    return  rhours + " hours and " + rminutes + " minutes.";
    }
    
    console.log(timeConvert(50, 432 ));
    console.log(timeConvert(80, 432 ));




  