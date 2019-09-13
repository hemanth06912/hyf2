// Age-ify (A future age calculator)

const yearOfBirth = 1991;
const yearFuture = 2050;
const age = yearFuture - yearOfBirth;
console.log("your are "+ age +" years old at "+ yearFuture +"");

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const humanYear = dogYearFuture-dogYearOfBirth;
const dogYear = humanYear*7
let shouldShowResultInDogYears ;
if (shouldShowResultInDogYears ===true){
    console.log("your dog will be " + dogYear + " dog years old in 2027.")   
} else {
    console.log("your dog will be " + humanYear + " human years old in 2027.") 
}

// Housey pricey (A house price estimator)

const peterVolumeInMeters = 8*10*10;
const petergardenSizeInM2 = 100;
const juliaVolumeInMeters = 5*11*8;
const juliagardenSizeInM2 = 70;
if ((housePrice = (peterVolumeInMeters * 
    2.5 * 1000 + petergardenSizeInM2*300 ))< 2500000){
    console.log("peter is paying too much");
}else{
    console.log("peter is paying too little");
}
if ((housePrice = (juliaVolumeInMeters * 
    2.5 * 1000 + juliagardenSizeInM2*300 ))< 1000000){
    console.log("julia is paying too much");
}else{
    console.log("julia is paying too little");
}

// Ez Namey (Startup name generator) 

const firstWords = ["Easy" , "Your" , "Made" , "For" ,"people's", "nice", "cool" ,"our" ,"perfect" ,"standout"]
const secondWords = ["innovation" , "creative" , "Awesome", "idea", "genius", "cool", "technological", "logic"
                     ,"proactive" ,"success"]
const RandomNumber = Math.floor(Math.random() * 10)+0;
const startUpName = firstWords[RandomNumber] +" "+ secondWords[RandomNumber];
const startUpNameLength = startUpName.length;
console.log("The random startup is " + startUpName + 
            " and the number of characters are " + startUpNameLength + ".");

    
