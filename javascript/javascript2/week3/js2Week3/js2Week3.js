const button1=document.getElementById('btn1')

const button2=document.getElementById('btn2')
const num =1;
let fun = function(){
    setTimeout(prt, 4 * 1000 )
}

let prt = function (){
        console.log(num++)
}

let funt = function(){
    console.log(num++)
}
button1.addEventListener('click',funt)
button2.addEventListener('click',fun)


// let x=function (){
//     console.log("i am called from inside the function")
// };

// let y= function(back){
//  console.log('do something');
//  back();
// }

// y(x);

// let calc = function (num1 , num2 ,calcType){
//     if (calcType=== 'add'){
//         return num1+num2;
//     }else if (calcType === 'multiply'){
//         return num1*num2;
//     }
// };

// console.log(calc(2,3,'add'));
let add = function (a,b){
    return a+b;
}
let multiply = function (a,b){
    return a*b;
}
let calc = function (num1,num2,callback){
    return callback(num1,num2);
};


console.log(calc(5,8,function (a,b){ return a-b;}));