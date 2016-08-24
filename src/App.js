import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';
import Landing from './components/Landing';
import Chat from './containers/Chat';

const routes = () => (
  <Route path='/' component={Main}>
    <IndexRoute component={Landing} />
    <Route path='/chat' component={Chat} />
  </Route>
);

class App extends Component {
  render() {
    return <Router history={browserHistory}>{routes()}</Router>
  }
};

App.Routes = routes;

module.exports = App;
