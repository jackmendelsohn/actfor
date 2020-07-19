import React, { Component } from 'react';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

// Google Analytics
import ReactGA from 'react-ga';
import GA from './utils/GoogleAnalytics'

// containers
import About from './containers/About';
import Home from './containers/Home';
import Yemen from './containers/Yemen';

class ActFor extends Component {

  render() {
    return (
      <div style={{ margin: '24px' }} >
        <Router>
        { GA.init() && <GA.RouteTracker /> }
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/yemen">
              <Yemen />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default ActFor;