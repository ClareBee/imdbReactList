import React from 'react';
import MoviesList from './MoviesList';

class OpeningsBox extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className="displayBox">
      <p>This is the opening box</p>
    </div>
  )
  }
}

export default OpeningsBox;
