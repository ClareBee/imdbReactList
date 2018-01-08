import React from 'react';
import Movie from './components/Movie';

class MoviesList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <p>This is the movies list</p>
      </React.Fragment>
    );
  }
}

export default MoviesList;
