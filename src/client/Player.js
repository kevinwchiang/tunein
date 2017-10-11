import React, { Component } from 'react';

class Player extends Component {
  render() {
    const { currentStation, selectTag } = this.props;
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
              <span className="tag" onClick={() => selectTag(tag)}>{tag}</span>
            </div>
            ))}
        </div>
      );
    }
    return null;
  }
}

export default Player;
