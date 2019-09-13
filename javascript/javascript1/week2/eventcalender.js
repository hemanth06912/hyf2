 // Calender Event Day:

 
 const d = new Date();
 const days = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];

function calenderEventDay(num){
    const i=d.getDay();
    const x=(i+num)%7;
    return i,days[x];
}
console.log(calenderEventDay(10));






