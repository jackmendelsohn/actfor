import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Header
} from 'semantic-ui-react';

import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// pages
import YemenDirectory from './directory';

import PressureCongress from './pressure/PressureCongress';
import PressureMedia from './pressure/PressureMedia';
import PressureWhiteHouse from './pressure/PressureWhiteHouse';

import CrisisArticle from './education/article';
import ResourceList from './education/resources';

import Donate from './donate';

import People from './people';

class YemenPages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/yemen">
            <YemenDirectory />
          </Route>

          <Route path="/yemen/education/crisis">
            <CrisisArticle />
          </Route>

          <Route path="/yemen/education/resources">
            <ResourceList />
          </Route>

          <Route path="/yemen/pressure/media">
            <Header>
              <Header.Subheader>
                Use this page to contact media outlets.
              </Header.Subheader>
            </Header>
            <PressureMedia />
          </Route>

          <Route path="/yemen/pressure/whitehouse">
            <Header>
              <Header.Subheader>
                Use this page to contact The White House.
              </Header.Subheader>
            </Header>
            <PressureWhiteHouse />
          </Route>

          <Route path="/yemen/pressure/congress">
            <Header>
              <Header.Subheader>
                Use this page to contact congress.
              </Header.Subheader>
            </Header>
            <PressureCongress />
          </Route>


          <Route path="/yemen/donate">
            <Donate />
          </Route>

          <Route path="/yemen/people">
            <People />
          </Route>

          <Route path="/yemen/*">
            <Redirect to="/yemen" />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default YemenPages;
