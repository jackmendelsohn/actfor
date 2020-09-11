import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// semantic-ui
import {
    Segment,
    Table
} from 'semantic-ui-react';

// messages
import { caseHollowell } from './../messages';

class Hollowell extends Component {

    renderStep3Segment = () => {

        return (
            <Segment placeholder>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Official</Table.HeaderCell>
                            <Table.HeaderCell>Contact Information</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Mayor Steve Adler</Table.Cell>
                            <Table.Cell>Phone: 512-978-2100 or message online <a href="https://www.austintexas.gov/email/steveadler">here</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>City Manager Spencer Crock</Table.Cell>
                            <Table.Cell>Phone: 512-974-2220</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>City Council Members</Table.Cell>
                            <Table.Cell>Phone: (502) 574-6336 or message online <a href="https://www.austintexas.gov/email/all-council-members">here</a> </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
        )
    }
    render() {
        const steps = [
            {
                type: 'name',
                name: 'Step 1',
            },
            {
                type: 'message',
                name: 'Step 2',
                message: caseHollowell,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Reach out to Texas officials with your message',
                component: this.renderStep3Segment,
            },

        ]
        return (
            <div>
                <StepMessage
                    steps={steps}
                />
            </div>
        );
    }
}

export default Hollowell;
