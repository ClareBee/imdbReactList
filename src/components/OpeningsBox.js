import React from 'react';
import MoviesList from './MoviesList';

class OpeningsBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Casablanca", showTime: "Monday 1:00pm"},
        {id: 2, title: "Reservoir Dogs", showTime: "Tuesday 8:00pm"},
        {id: 3, title: "Apocalypse Now", showTime: "Wednesday 10:00pm"},
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
      <div id="linkText">
        <a href="#">See more opening this week<span id="linkArrows">>></span></a>
      </div>
      <hr />
      <footer>
        <button id="showtimesBtn">Get Showtimes >></button>
      </footer>
    </section>
    );
  }
}

export default OpeningsBox;
