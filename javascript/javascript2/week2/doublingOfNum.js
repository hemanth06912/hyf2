const numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

// numbers.forEach(item => {
//     if(item %2 !==0){
//        newNumbers.push(item*2);
//     }
// });



const newNumbers = numbers.filter(num => (num % 2 !== 0))
.map(num => num*2);

console.log("The doubled numbers are", newNumbers);
