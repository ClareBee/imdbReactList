import React from 'react';
import Movie from './Movie';

class MoviesList extends React.Component{
  render(){
    const movieNodes = this.props.data.map(movie => {
      return(
        <section class="movieItem">
          <img src="plusSign.jpg"/>
          <div class="movieDetails">
            <Movie showTime={movie.showTime} key={movie.id}>
              <p class="title">{movie.title}</p>
              <a class="times" href="#">Showtimes</a>
            </Movie>
          </div>
        </section>
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
