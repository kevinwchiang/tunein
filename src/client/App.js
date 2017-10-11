import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './tunein_logo.png';
import './App.css';
import Stations from './Stations';
import Player from './Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      currentStation: null,
      filter: null,
    };
    this.fetchStations = this.fetchStations.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  componentWillMount() {
    this.fetchStations();
  }

  fetchStations() {
    const url = 'http://frontend-tunein.herokuapp.com/api/v1/stations';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(body => this.setState({ stations: body.data }));
  }

  handleClick(station) {
    this.setState({ currentStation: station });
  }

  selectTag(tag) {
    this.setState({ filter: tag });
  }

  render() {
    const { stations, currentStation, filter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <Stations
            data={stations}
            handleClick={this.handleClick}
            filter={filter}
            resetFilter={() => this.setState({ filter: null })}
          />
          <Player currentStation={currentStation} selectTag={this.selectTag} />
        </div>
      </div>
    );
  }
}

export default App;
