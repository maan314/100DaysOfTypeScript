function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album('Atif Aslam', 'Doorie'));
console.log(make_album('Rahat Fateh Ali khan', 'Yaad', 12));
console.log(make_album('Amanat Ali', 'Yaad', 8));
