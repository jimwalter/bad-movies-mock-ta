import React from 'react';

const Movie = (props) => {
    console.log(props.movie)
    return(
        <li className="movie_item" value={props.movie} onClick={props.onClick}>
            <img src= {"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path} />
            <div className="movie_description">
            <h2>{props.movie.title}</h2>
            <section className="movie_details">
                <div className="movie_year">
                <span className="title">{props.movie.release_date}</span>
                <span>Look Above</span>
                </div>
                <div className="movie_rating">
                <span className="title">Rating</span>
                <span>{props.movie.vote_average}</span>
                </div>
            </section> <br></br>
            <div>
                <button value={props.movie}>Save to Favorites</button>
            </div>
            </div>
        </li>
    )
}

export default Movie;
