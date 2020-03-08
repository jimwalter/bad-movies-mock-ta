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

  saveMovie(movieObj) {
    // same as above but do something diff
    // post to db
    console.log("SAVING FROM INDEX.JSX: ", movieObj);
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
