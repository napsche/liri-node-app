var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");

var spotify = new spotify(keys.spotify);

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