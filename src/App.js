import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './Home'
import About from './About'
class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }



  render() {
    return (
      <BrowserRouter>
        <Switch>

        <Route
          exact path="/"
          component={Home}
        />
        <Route
          exact path="/About"
          component={About}
        />
    </Switch>
  </BrowserRouter>
    );
  }
}

export default App;
