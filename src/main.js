import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/home';
import Map from './components/map';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="map" component={Map}/>
    </Route>
  </Router>
), document.getElementById('root'));
