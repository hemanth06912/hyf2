// fetching and waiting:

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then((res)=>res.json())
.then(data=> {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data)
       },5*1000)
    })
})
.then(data=> console.log(data));