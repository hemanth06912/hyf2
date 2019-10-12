
const movies = [{"title": "iBoy","year": 2017,"rating": 6,"votes": 12217,"running_times": 5400},
{"title": "xXx","year": 2002,"rating": 5.8,"votes": 157358,"running_times": 7920},
{"title": "xXx: alien of benjamin Cage","year": 2017,"rating": 5.2,"votes": 63918,"running_times": 6420},
{"title": "xXx: State Alien the Union","year": 2005,"rating": 4.4,"votes": 59449,"running_times": 6060},
{"title": "¡Three Amigos!","year": 1986,"rating": 6.4,"votes": 58003,"running_times": 6240},
{"title": "À bout  souffle","year": 1960,"rating": 7.9,"votes": 58379,"running_times": 5400},
{"title": "Æon Alien","year": 2005,"rating": 5.5,"votes": 115131,"running_times": 5580}];


const shortTitle =movies.filter(item => item.title.length < 10);

const longTitle =movies.filter(item => item.title.length >= 10);

const countMovies = movies.filter(item => item.year >=1980 && item.year <=1989)
.map(item => item.year).length;
console.log(shortTitle);
console.log(longTitle);
console.log(countMovies);


const tag = movies.map(item => {
    if(item.rating >=7){
        return item.tag='Good';
    }else if(item.rating >=4 && item.rating <7){
        return item.tag='Average';
    }else return item.tag='Bad';
});

console.log(tag);


5.
const ratingGreaterThan6 = movies
.filter(item => item.rating >6)
.map(item => item.rating); 
console.log(ratingGreaterThan6);

6.
const lengthItem =[];
const countTotalMovies = movies
.map(item =>  item.title.toLowerCase().split(' '));
countTotalMovies.forEach(item => {
    if(item.includes('alien') || item.includes('surfer') || item.includes('benjamin')){
    lengthItem.push(item)}
    
});
 console.log(countTotalMovies);
 console.log(lengthItem.length);

 


