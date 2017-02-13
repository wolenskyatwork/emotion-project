import React from 'react';
import { connect } from 'react-redux';
import { mountMapAction } from '../actions/mapActions';

class Map extends React.Component {
  componentDidMount() {
    this.props.mountMap();
  }

  render() {
    return (
      <div className="fullscreen">
        <div id="map" className="mapbox"></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return({
    mountMap: () => { dispatch(mountMapAction); }
  });
}

export default connect(null, mapDispatchToProps)(Map);
