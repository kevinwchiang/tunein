import React from 'react';
import PropTypes from 'prop-types';

const Stations = (props) => {
  const {
    data, handleClick, filter, resetFilter,
  } = props;
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
        <div
          key={station.id}
          className="station-button"
          onClick={() => handleClick(station)}
        >
          {station.name}
        </div>
        ))}
    </div>
  );
};

Stations.defaultProps = {
  data: [],
  handleClick: null,
  resetFilter: null,
  filter: null,
};

Stations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func,
  resetFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Stations;
