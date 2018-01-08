import React from 'react';
import Movie from './Movie';

class MoviesList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <Movie />
        <Movie />
      </React.Fragment>
    );
  }
}

export default MoviesList;
