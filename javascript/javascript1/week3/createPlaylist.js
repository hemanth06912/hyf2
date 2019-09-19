const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];
function addSongToMyPlaylist(title){
        for(let i=0;i<songDatabase.length;i++){
    if(title==songDatabase[i].title){
      myPlaylist.push(songDatabase[i]);
    }
    }
    return myPlaylist;
}
console.log(addSongToMyPlaylist('3 nails in wood')) ;
console.log(myPlaylist);