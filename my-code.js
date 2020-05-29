var exampleInput = [
  { title: "Intro", artist: "The xx", seconds: 127 },
  { title: "Free Fallin'", artist: "Tom Petty", seconds: 256 },
  { title: "What You Know", artist: "Two Door Cinema Club", seconds: 191 },
  { title: "Closer", artist: "The Chainsmokers", seconds: 244 },
  { title: "Gooey", artist: "Glass Animals", seconds: 289 },
];

// P: Parameters = array of song objects; function name = justTitles
// R: return array of titles of all songs
// E: Example: exampleInput => we expect a result of:
// ["Intro", "Free Fallin'", "What You Know", "Closer", "Gooey"]
// P: Pseudocode - see pseudocode throughout

function justTitles(songArray) {
  // Create a variable that will hold the array of song titles
  var songTitles = [];

  // Use the forEach function on the songArray input
  songArray.forEach(function (song) {
    // Push the title of the object onto the song title array variable
    songTitles.push(song.title);
  });

  // Return the song title array variable
  return songTitles;
}

console.log(justTitles(exampleInput));
