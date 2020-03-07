const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const axios = require('axios');


// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup


//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes

app.get('/genres', function(req, res) {
  // make an axios request to get the official list of genres from themoviedb
  console.log("Getting Genres from API")
  axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=dc1f020950a87aec01d0131b44191fcf&language=en-US')
    .then(results => res.status(200).json(results.data.genres))
    // post these to the db??
  .catch(err => console.log(err));

  // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
  // send back
});

app.get('/search', function(req, res) {
  console.log("Server Req rec'd - query: ", req.query); // { genre: 'Drama'}
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
  // console.log("Getting Genres from API")
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dc1f020950a87aec01d0131b44191fcf&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${req.query.genre}`)
    .then(results => {
      console.log("Results returning to client");

      res.status(200).json(results.data.results)
    })
    // post these to the db??
  .catch(err => console.log(err));

  // and sort them by votes (worst first) using the search parameters in themoviedb API
});


app.post('/save', function(req, res) {
  
  //save movie as favorite
  
});

app.post('/delete', function(req, res) {

  //remove movie from favorites
  
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

