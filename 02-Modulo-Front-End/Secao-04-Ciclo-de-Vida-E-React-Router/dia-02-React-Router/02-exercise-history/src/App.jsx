import React, { Component } from 'react';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Welcome" component={Welcome} />
        </Switch>
      </div>
    );
  }
}
