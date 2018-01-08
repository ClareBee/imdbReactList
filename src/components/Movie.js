import React from 'react';


class Movie extends React.Component {
  render(){
    return(
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Movie;
