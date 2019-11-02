// const myPromise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve('hello')
//    },4*1000)
// });

// myPromise.then((value)=>console.log(value));


// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('hej')
//     },2*1000)
//  });
 
//  myPromise.then((value)=>console.log(value));

// function makeOrder(status){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(status){
//                     resolve('ready')  
//                 }else{
//                     reject('cancelled')
//                 }   
//             },2*1000)
//          });
// }

// makeOrder(true)
// .then((value)=>console.log(value))
// .catch((err)=>console.log(err));

// makeOrder(false)
// .then((value)=>console.log(value))
// .catch((err)=>console.log(err));


navigator.getBattery()
.then(battery=>console.log(battery.level))
.then(()=>fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'))
.then((res)=>res.json())
// .then((data)=>console.log(data))
.then((data)=>{
    const moviesTitles=data.map(data=>data.title);
    console.log(moviesTitles);
});


