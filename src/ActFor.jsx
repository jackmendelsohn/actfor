import React, { Component } from 'react';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// containers
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

class ActFor extends Component {

  render() {
    return (
      <div style={{ paddingLeft: '24px' }} >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default ActFor;