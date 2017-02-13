import React from 'react';
import { connect } from 'react-redux';
import { mountMapAction } from '../actions/mapActions';

class Map extends React.Component {
  componentDidMount() {
    const { mounted, mountMap } = this.props;
    console.log(mounted, 'i');
    if (!mounted) {
      mountMap();
    }
  }

  render() {
    console.log(this.props.mounted);
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

function mapStateToProps(state) {
  return({
    mounted: state.mapbox.mounted,
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
