import React, { Component } from 'react';

// semantic-ui
import { Header } from 'semantic-ui-react';

// router
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// pages
import UyghurNowThis from './education/nowthis';

class UyghurPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/uyghur/education/nowthis">
            <UyghurNowThis />
          </Route>

          <Route path="/uyghur/education/who">
            Uyghur Education
          </Route>

          <Route path="/uyghur/pressure/">
            Uyghur Public Pressure
          </Route>

          <Route path="/uyghur/people/">
            Uyghur People
          </Route>

          <Route path="/uyghur/boycott/">
            Uyghur Boycott
          </Route>

          <Route path="/uyghur/donate/">
            Uyghur Donate
          </Route>

          <Route path="/uyghur/*">
            <Redirect to="/uyghur/education/" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UyghurPages;