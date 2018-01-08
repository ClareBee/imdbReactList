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
    <section className="displayBox">
      <header>
        <h1>UK Openings This Week</h1>
      </header>
      <MoviesList data={this.state.data}/>
      <footer>
        <button id="showtimesBtn">Get Showtimes >></button>
      </footer>
    </section>
    );
  }
}

export default OpeningsBox;
