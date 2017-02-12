import React from 'react';
import mapboxgl from 'mapbox-gl';
import { mapboxToken } from '../../.env';

class Map extends React.Component {
  componentDidMount() {
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-73.9724680, 40.6776330],
      zoom: 11,
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
