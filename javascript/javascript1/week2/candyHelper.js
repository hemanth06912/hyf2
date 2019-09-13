// Candy Helper:

const boughtCandyPrices = [];
candyType=["sweet", "chocolate" , "toffee", "chewing-gum"];
CandyPrice=[ 0.5, 0.7, 1.1, 0.03 ];
function addCandy(candyType,weight){
    for(let i=0;i<=4;i++){
    if(candyType==candyType[i]){
        CandyPrice==CandyPrice[i];
    }
} boughtCandyPrices.push=(weight*CandyPrice);
}
// boughtCandy:

const sum=0;
for (let i=0;i<boughtCandyPrices.length;i++){
    sum += boughtCandyPrices[i];
}

// Amount to spent:
const  amountToSpent = Math.random()*100;   
const boughtCandy=[];
function canBuyMoreCandy(){
    if(amountToSpent<boughtCandy){
        return "You can buy more,so please do!";
    }else
    return "Enough candy by you";

}

console.log(canBuyMoreCandy());

