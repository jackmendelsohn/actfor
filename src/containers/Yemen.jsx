import React, { Component } from 'react';

import { Segment, Menu } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';

class Yemen extends Component {
  render() {
    const rightMenu = [
      {
        id: 'education',
        content: 'Education',
        icon: 'pencil',
        dropdown: [
          {
            text: 'World\'s Worst Crisis',
            path: '/yemen/education/jahood'
          },
          {
            text: 'Other Resources',
            path: '/yemen/education/resources'
          }
        ],
      },
      {
        id: 'public',
        content: 'Public Pressure',
        icon: 'university',
        dropdown: [
          {
            text: 'Pressure Media',
            path: '/yemen/pressure/media'
          },
          {
            text: 'Pressure The White House',
            path: '/yemen/pressure/whitehouse'
          },
          {
            text: 'Pressure Congress',
            path: '/yemen/pressure/congress'
          },
        ],
      },
      {
        id: 'donate',
        content: 'Donate',
        icon: 'dollar',
        path: '/yemen/donate'
      }
    ];

    return (
      <div>
        <NavBar rightMenu={rightMenu} />
        Yemen
      </div>
    );
  }
}

export default Yemen;