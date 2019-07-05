// Class Library
class Library {
  constructor(name, creator) {
    this.name = name,
    this.creator = creator,
    this.playlist = []
  }
}

Library.prototype.addPlaylist = function(playlist) {
  return this.playlist.push(playlist);
}

// Class Playlist
class Playlist {
  constructor(name) {
    this.name = name,
    this.tracks = []
  }
}

Playlist.prototype.overallRating = function() {
  let totalRating = 0;
  this.tracks.forEach((track) => {
    console.log(track.rating);
    totalRating += track.rating;
  })
  let avgRating = totalRating / this.tracks.length;
  return avgRating;
}

Playlist.prototype.totalDuration = function() {
  let time = 0;
  this.tracks.forEach((track) => {
    time += track.length;
  })
  return time;
}

Playlist.prototype.addTrack = function(track) {
  return this.tracks.push(track);
}

// Class Track
class Track{
  constructor(title, rating, length){
    if (rating > 5 || rating < 1){
      console.log('Rating must be between 1 and 5');
    } else if (typeof length !== "number") {
      console.log('Length must be a number');
    } else {
      this.title = title,
      this.rating = rating,
      this.length = length
    }
  }
}


let library1 = new Library('library1', 'Posh');
let playlist1 = new Playlist('Posh Posh Posh');
let track1 = new Track('Posh is cool', 2, 100);
let track2 = new Track('Posh is great', 4, 200);

console.log(track1);
console.log(track2);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
library1.addPlaylist(playlist1);

console.log(library1);
console.log(playlist1.overallRating());
console.log(playlist1.totalDuration());
