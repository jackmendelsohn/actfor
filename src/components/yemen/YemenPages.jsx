import React, { Component } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

// pages
import PressureCongress from './pressure/PressureCongress';
import PressureMedia from './pressure/PressureMedia';
import PressureWhiteHouse from './pressure/PressureWhiteHouse';

class YemenPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/yemen/education/crisis">
            Maya Article
          </Route>

          <Route path="/yemen/education/resources">
            Other Resources List
          </Route>

          <Route path="/yemen/pressure/media">
            <PressureMedia />
          </Route>

          <Route path="/yemen/pressure/whitehouse">
            <PressureWhiteHouse />
          </Route>

          <Route path="/yemen/pressure/congress">
            <PressureCongress />
          </Route>

          <Route path="/yemen/donate">
            Donate
          </Route>
        </Switch>
      </div>
    );
  }
}

export default YemenPages;