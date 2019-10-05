 const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
let sum = 0;

function findAvg(housePrices){
 for (i=0; i<housePrices.length ;i++){
    sum += housePrices[i];
    Avg = sum/housePrices.length;
 }
 return `Average is ${Math.round((Avg),2)}`;
}
    

console.log(findAvg(housePrices));

function findMedian(housePrices){
    housePrices.sort(function(a,b){return a-b});
    const val = Math.floor(housePrices.length/2);
    if(housePrices.length % 2 !==0){
        return  `median is ${housePrices[val]}`;
    }else
    return `median is ${(housePrices[val-1] + housePrices[val])/2}`;

    }

console.log(findMedian(housePrices));

// function findAvgMedian(average,median){
//    return  { average: findAvg(),
//              median : findMedian() 
// };
// }
// const avgMedian = findAvgMedian();
// const body = document.querySelector('body');
// const pAvg = document.createElement('p');
// pAvg.textContent = `${avgMedian.average}`;
// body.appendChild(pAvg);

// const pMedian = document.createElement('p');
// pMedian.textContent = `${avgMedian.median}`;
// body.appendChild = `pMedian`;
