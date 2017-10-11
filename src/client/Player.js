import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  const { currentStation, selectTag } = props;
  if (currentStation) {
    return (
      <div className="player-container">
        <h2>{currentStation.name}</h2>
        <audio
          controls
          src={currentStation.streamUrl}
          autoPlay
        >
          Your browser does not support the <code>audio</code> element.
        </audio>
        <h4>Tags</h4>
        {currentStation.tags.map(tag => (
          <div key={tag}>
            <button className="tag" onClick={() => selectTag(tag)}>{tag}</button>
          </div>
          ))}
      </div>
    );
  }
  return null;
};

Player.defaultProps = {
  currentStation: {},
  selectTag: null,
};

Player.propTypes = {
  currentStation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    reliability: PropTypes.number.isRequired,
    streamUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  selectTag: PropTypes.func,
};

export default Player;
