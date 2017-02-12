import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/home';
import Map from './components/map';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="map" component={Map}/>
  </Route>
);
