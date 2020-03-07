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
  console.log("Server GET rec'd");
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie

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


//   res.status(200).json({
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 80,
//             "name": "Crime"
//         },
//         {
//             "id": 99,
//             "name": "Documentary"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         },
//         {
//             "id": 36,
//             "name": "History"
//         },
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 10402,
//             "name": "Music"
//         },
//         {
//             "id": 9648,
//             "name": "Mystery"
//         },
//         {
//             "id": 10749,
//             "name": "Romance"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 10770,
//             "name": "TV Movie"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         },
//         {
//             "id": 10752,
//             "name": "War"
//         },
//         {
//             "id": 37,
//             "name": "Western"
//         }
//     ]
// })