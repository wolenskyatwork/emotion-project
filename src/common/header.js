import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <Link to="/">The Emotion Project</Link>
        </div>
        <div className="header-right">
          <Link to="map">Map</Link>
          <Link to="/">About</Link>
        </div>
      </div>
    );
  }
}

export default Home;
