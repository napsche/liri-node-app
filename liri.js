var dotenv = require("dotenv").config();
var keys = require("./keys.js");
// var inquirer = require("inquirer");
var SPOTIFY_ID = "a8f4bd03189249a99e313ee104d916a7";
var SPOTIFY_SECRET = "f37cf829f64a4a76ae28fc93ffb56e61";
var request = require('request'); // "Request" library
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var jsonData;
var track = process.argv[3];

var spotify = new Spotify(keys.spotify);


spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     response.tracks.items.forEach(function(item) {
//         console.log(JSON.stringify(item));
//     });
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// https://api.spotify.com/v1/search?q=

// var Song = function() {
//     // this.artist = artist;
//     // this.title = title;
//     // this.preview = preview;
//     // this.album = album;
//     spotify
//     var divider = "\n------------------------------------------------------------\n\n";
//     this.findTrack = function(track) {
//         var URL = "https://api.spotify.com/v1/search?q=" + track;
    
//         axios.get(URL).then(function(response) {
//             console.log(response);
//           // Place the response.data into a variable, jsonData.
//             // jsonData = response.data;
//             // console.log(jsonData);
//         //   var trackData = [
//         //     "Artist Name: " + jsonData.artist,
//         //     "Title: " + jsonData.track,
//         //     "Preview: " + jsonData.preview,
//         //     "Album: " + jsonData.album,
//         //   ].join("\n\n");
//         //   fs.appendFile("log.txt", showData + divider, function(err) {
//         //     if (err) throw err;
//         //     console.log(showData);
//         //   });
    
//     // console.log("Who sings the song?: " + this.artist + "\n");
//     // console.log("What is the song title?: " + this.title + "\n");
//     // console.log("Can I preview the song?: " + this.preview + "\n");
//     // console.log("What album is this from?: " + this.album + "\n");
//         });
//     }
// };