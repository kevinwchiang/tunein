import React, { Component } from 'react';

class Stations extends Component {
  render() {
    const {
      data, handleClick, filter, resetFilter,
    } = this.props;
    let stations = data;
    if (filter) {
      stations = stations.filter(station => station.tags.indexOf(filter) !== -1);
    }
    return (
      <div className="stations-container">
        <div className="stations-header">
          <h2 style={{ display: 'inline-block' }}>
            Stations
            {filter && <span>({filter})</span>}
          </h2>
          <button className="reset-button" onClick={resetFilter}>reset filter</button>
        </div>
        {stations.map(station => (
          <div key={station.id} className="station-button" onClick={() => handleClick(station)}>
            {station.name}
          </div>
          ))}
      </div>
    );
  }
}

export default Stations;
