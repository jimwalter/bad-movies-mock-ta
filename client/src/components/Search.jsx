import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: ['theway', 'thisway', 'thatway']
    };
  }
  getGenres(event) {
    console.log(event);
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {this.state.genres.map( type => {
            // console.log(type);
            return <option key={type} value={type}>{type}</option>
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