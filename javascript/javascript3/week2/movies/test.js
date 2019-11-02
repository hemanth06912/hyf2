
    fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then((res)=>res.json())         
    .then((data)=> {
        const badMovies=data.filter(data=> (data.rating<6))
                console.log(badMovies);
                return badMovies;           
        })
    .then((data)=>{
        const badMoviesSince2000=data.filter(data=>
            (data.year>1999));
            console.log(badMoviesSince2000);
            return badMoviesSince2000;
    })
    .then((data)=>{
        const titlesMovies= data.map(data=>
            data.title)
            console.log(titlesMovies);
            return titlesMovies;
    });
          

