import React from 'react';
import Movie from './Movie';

class MoviesList extends React.Component{
  render(){
    const movieNodes = this.props.data.map(movie => {
      return(
        <Movie showTime={movie.showTime} key={movie.id}>{movie.title}</Movie>
      );
    });
    return(
      <React.Fragment>
        {movieNodes}
      </React.Fragment>
    );
  }
}

export default MoviesList;
