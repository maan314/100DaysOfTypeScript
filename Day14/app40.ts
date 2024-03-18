//40: Album: Create objects for music albums.

function make_album(artist: string, title:string, tracks?:number){
    let album = {artist,title};
    if(tracks){
        album['tracks']= tracks;
    }
    return album;
}

console.log(make_album('Atif Aslam', 'Doorie'));
console.log(make_album('Rahat Fateh Ali khan', 'Yaad', 12));
console.log(make_album('Amanat Ali', 'Yaad', 8));