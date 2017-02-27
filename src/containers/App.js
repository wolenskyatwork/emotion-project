import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { getLocationAction } from '../actions/locationActions';

class App extends Component {
  constructor(props) {
    super(props);

    props.dispatch(getLocationAction);
  }

  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
