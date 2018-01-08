import React from 'react';
import MoviesList from './MoviesList';

class OpeningsBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Casablanca", showTime: "Monday 1:00pm"}
      ]
    }
  }
  render(){
    return(
    <div className="displayBox">
      <h1>UK Openings This Week</h1>
      <MoviesList data={this.state.data}/>
    </div>
    );
  }
}

export default OpeningsBox;
