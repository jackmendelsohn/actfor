import React, { Component } from 'react';

// semantic-ui
import {
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Menu,
  Segment,
  TextArea,
  Button,
  Table,
} from 'semantic-ui-react';

import reactElementToJSXString from 'react-element-to-jsx-string';

// components
import CopyMessage from './CopyMessage';
import MailTo from './MailTo';

class StepMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      custom: '',
      activeItem: props.steps[0].name,
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleTextChange = (e, {id , value}) => {
    this.setState({
      [id]: value,
    })
  }

  renderSegment = () => {
    const { steps } = this.props;
    const { activeItem, name, location, custom } = this.state;

    const currentStep = steps.filter(step => step.name == activeItem)[0] || {}

    switch (currentStep.type) {
      case 'name':
        return (
          <div>
            <Segment.Group>
              <Segment>
                <Header as='h2'>
                  {currentStep.name}
                  <Header.Subheader>
                    Add a name and your local information for your generated message (optional)
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.handleTextChange}
                />
                <br />
                <br />
                <Input
                  id="location"
                  placeholder="State, Zipcode"
                  value={location}
                  onChange={this.handleTextChange}
                />
                <Divider />
                <Header>
                  <Header.Subheader>
                    Add your own custom message to the script to avoid it getting automatically filtered out. It will be added to the top of the message. (recommended)
                  </Header.Subheader>
                </Header>
                <Form>
                  <TextArea
                    id="custom"
                    placeholder="Example: I am John Smith and I am an undergraduate student. This issue is incredibly important because..."
                    value={custom}
                    onChange={this.handleTextChange}
                  />
                </Form>
              </Segment>
            </Segment.Group>
          </div>
        );
      break;

      case 'message':
        const message = currentStep.message(name, location, custom)

        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                {currentStep.name}
                <Header.Subheader>
                  Read our generated script for your message, and then copy it by clicking the button!
                </Header.Subheader>
              </Header>
            </Segment>
            <Segment>
              <CopyMessage id="message" message={message}/>
              <Divider />
              {message}
            </Segment>
          </Segment.Group>
        );
      break;

      case 'email':
        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                {currentStep.name}
                <Header.Subheader>
                  {currentStep.subheader}
                </Header.Subheader>
              </Header>
            </Segment>

            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>

                <Grid.Column>
                  {currentStep.leftSegment}
                </Grid.Column>

                <Grid.Column textAlign='center' verticalAlign='middle'>
                  <Header icon>
                    <Icon name='mail'/>
                    Send to {currentStep.sendTo}
                  </Header>
                  <MailTo
                    email={currentStep.email}
                    subject={currentStep.subject}
                    body={reactElementToJSXString(currentStep.message(name, location))}
                  >
                    <Button primary>Send email to {currentStep.email}</Button>
                  </MailTo>
                </Grid.Column>

              </Grid>
            </Segment>
          </Segment.Group>
        );
      break;

      case 'other':
        return (
          <div>
            <Segment.Group>
              <Segment>
                <Header as='h2'>
                  {currentStep.name}
                  <Header.Subheader>
                    {currentStep.subheader}
                  </Header.Subheader>
                </Header>
              </Segment>
              {currentStep.component && <currentStep.component name={name} location={location} custom={custom} />}
              {currentStep.segment}
            </Segment.Group>
          </div>
        );
      break;

      default:
        break;
    }
  }

  render() {
    const { steps } = this.props;
    const { activeItem } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>

              { steps.map(step => (
                <Menu.Item
                  name={step.name}
                  active={activeItem === step.name}
                  onClick={this.handleItemClick}
                />
              ))}

            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            {this.renderSegment()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default StepMessage;
