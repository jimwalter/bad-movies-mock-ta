import React from 'react';
import Movie from './Movie.jsx'
class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedVid: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick(event) {
    console.log(event.target);
    this.props.saveMovie(event.target.value);
  }
  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map( movie => {
          return <Movie key={movie.id} movie={movie} onClick={this.handleClick} />
          })
        }
      </ul>
    )
  }
}

export default Movies;