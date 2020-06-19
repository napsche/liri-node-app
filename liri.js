var dotenv = require("dotenv").config();
var keys = require("./keys.js");
// var inquirer = require("inquirer");
var SPOTIFY_ID = "a8f4bd03189249a99e313ee104d916a7";
var SPOTIFY_SECRET = "f37cf829f64a4a76ae28fc93ffb56e61";
var request = require('request'); // "Request" library
var Spotify = require('node-spotify-api');
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    response.tracks.items.forEach(function(item) {
        console.log(JSON.stringify(item));
    });
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });


var Song = function(artist, title, preview, album) {
    this.artist = artist;
    this.title = title;
    this.preview = preview;
    this.album = album;

    console.log("Who sings the song?: " + this.artist + "\n");
    console.log("What is the song title?: " + this.title + "\n");
    console.log("Can I preview the song?: " + this.preview + "\n");
    console.log("What album is this from?: " + this.album + "\n");
}