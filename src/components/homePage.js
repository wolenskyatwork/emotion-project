import React from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
  componentDidMount() {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  render() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpbG9yZmxhcmVzIiwiYSI6ImNpcWs4aDltNjAxenVnaGo5aWlhZ2VtNDcifQ.C9h7x7AJ5eMzbI3GuQV0xQ';

    return (
      <div className="fullscreen">
        <div id="map" className="mapbox"></div>
      </div>
    );
  }
}

export default Map;
