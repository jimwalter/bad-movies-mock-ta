import React from 'react';
const axios = require('axios');


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentGenreId: 28
    };

    this.getGenres = this.getGenres.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

  }

  componentDidMount(){
    this.getGenres();
  }

  getGenres() {
    axios.get('http://localhost:3000/genres')
    .then(response => {
      // console.log(response.data);
      this.setState({
        genres: response.data
      })
    })
    .catch(err => console.log(err));    
  }

  handleClick(event) {
    event.preventDefault();
    this.props.getMovies(this.state.currentGenreId);
    // query to server
      // query to API
        // return results with limit of ten responses back to page
    
  }
  
  handleSelectChange(event) {
    event.preventDefault();
    this.setState({
      currentGenreId: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select onChange={this.handleSelectChange}>
          {this.state.genres.map( type => {
            return <option key={type.id} value={type.id}>{type.name}</option>
            }) 
          }
        </select>
        <br/><br/>

        <button onClick={this.handleClick}>Search</button>

      </div>
    );
  }
};

export default Search;