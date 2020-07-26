import React, { Component } from 'react';

// semantic-ui
import {
  Embed,
  Header,
} from 'semantic-ui-react';

class UyghurNowThis extends Component {
  render() {
    return (
      <div>
        <Header>
          <Header.Subheader>
            China Has Detained More Than a Million Muslims | Op-Ed | NowThis
          </Header.Subheader>
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="zmaqJDlWwrs"
          aspectRatio="21:9"
        />
      </div>
    );
  }
}

export default UyghurNowThis;