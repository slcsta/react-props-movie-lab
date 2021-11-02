import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
//MovieShowcase has access to movieData by importing this:
import movieData from './data.js'

export default class MovieShowcase extends Component {
  //For every object inside movieData, render a MovieCard component
  //pass in the object data as props (pass in all 4 props)

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX  
      return movieData.map(movie => {
        return (
          <MovieCard
            title={movie.title} 
            IMDBRating={movie.IMDBRating}
            genres={movie.genres} 
            poster={movie.poster}
          />
        );
      });
    }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
