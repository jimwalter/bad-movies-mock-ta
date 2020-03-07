import React from 'react';
const axios = require('axios');


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
  }

  componentDidMount(){
    // console.log("SEARCH MOUNTED");

    // this.getGenres()
  }

  getGenres() {
    console.log("GETTING GENRES");
    axios.get('http://localhost:3000/genres')
    .then(response => {
      console.log('Search RESPONSE: ', response.data);
      // console.log(response.data);
      // this.setState({
      //   genres: response.data
      // })
    })
    .catch(err => console.log(err));
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select>
          {this.state.genres.map( type => {
            return <option key={type.id} value={type.name}>{type.name}</option>
            }) 
          }
        </select>
        <br/><br/>

        <button onClick={this.getGenres(event)}>Search</button>

      </div>
    );
  }
};

export default Search;