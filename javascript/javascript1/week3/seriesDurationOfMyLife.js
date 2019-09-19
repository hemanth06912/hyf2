const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Hugo Chávez, El Com',
    days: 2,
    hours: 7,
    minutes: 0,
  },
  {
    title: 'The Flash',
    days: 3,
    hours: 13,
    minutes: 4,
  }
];
 const avgLifespan = 42048000;  // Average lifespan in minutes : 80*365*24*60 = 42048000 minutes;
 const seriesPeriod = [];
 let series= [];
 let sum=0;
 function timeOfMyLife(){   
    for(let i=0;i<seriesDurations.length;i++){      
        seriesPeriod.push(seriesDurations[i].days*(24*60) + 
        seriesDurations[i].hours*60 + seriesDurations[i].minutes);
        series.push(seriesPeriod[i]/avgLifespan *100);  
        } 
    for(let i=0;i<series.length;i++){
        series[i] = series[i].toFixed(3);
    }
    return "Game of thrones took " + series[0] + "% of my life"  +
            "Hugo Chávez, El Com took " + series[1] + "% of my life" +
            "The Flash took " + series[2] + "% of my life";
}
     function seriesSum(){
    for(let i=0;i<series.length;i++){
      sum = (sum*100 + series[i]*100)/100;
    }
    return "In total that is " + sum + "% of my life.";
}


 console.log(timeOfMyLife());
 console.log(seriesSum());
 
