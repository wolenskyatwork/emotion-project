import React from 'react';
import mapboxgl from 'mapbox-gl';
import { mapboxToken } from '../../.env';

class Map extends React.Component {
  componentDidMount() {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  render() {
    mapboxgl.accessToken = mapboxToken;

    return (
      <div className="fullscreen">
        <div id="map" className="mapbox"></div>
      </div>
    );
  }
}

export default Map;
