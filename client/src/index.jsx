import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };

    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies(28);
  }

  getMovies(genreId) {
    axios.get('http://localhost:3000/search', {
      params: {
        genre: genreId
      }
    })
    .then(results => {
      this.setState({
        movies: results.data
      })
    })
    .catch(err => console.log(err));
  }

  saveMovie() {
    // same as above but do something diff
    // post to db
    console.log("SAVING FROM INDEX.JSX")
  }

  deleteMovie() {
    // same as above but do something diff
    // delete from db
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search
            getMovies={this.getMovies} 
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            saveMovie={this.saveMovie}
            showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/* 0: {id: 28, name: "Action"}
1: {id: 12, name: "Adventure"}
2: {id: 16, name: "Animation"}
3: {id: 35, name: "Comedy"}
4: {id: 80, name: "Crime"}
5: {id: 99, name: "Documentary"}
6: {id: 18, name: "Drama"}
7: {id: 10751, name: "Family"}
8: {id: 14, name: "Fantasy"}
9: {id: 36, name: "History"}
10: {id: 27, name: "Horror"}
11: {id: 10402, name: "Music"}
12: {id: 9648, name: "Mystery"}
13: {id: 10749, name: "Romance"}
14: {id: 878, name: "Science Fiction"}
15: {id: 10770, name: "TV Movie"}
16: {id: 53, name: "Thriller"}
17: {id: 10752, name: "War"}
18: {id: 37, name: "Western"} */