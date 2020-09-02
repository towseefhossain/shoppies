import React from 'react';
import { TextContainer, Modal } from '@shopify/polaris';

export default class Alert extends React.Component {
    constructor() {
        super()
        this.state = {
            alreadyShown: false,
            open: false
        }
    }

    componentDidUpdate() {
        if ((this.props.shouldShowAlert === 5) && (this.state.open === false) && (this.state.alreadyShown === false)) {
            this.setState({
                open: true,
                alreadyShown: true
            })
        }
        else if ((this.props.shouldShowAlert < 5) && (this.state.alreadyShown === true)) {
            this.setState({
                open: false,
                alreadyShown: false
            })
        }
    }

    handleChange = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return <div style={{ height: '500px' }}>
            <Modal onClose={this.handleChange} title="Nomination Selections Complete" primaryAction={{
                content: 'Close',
                onAction: this.handleChange
            }} open={this.state.open}>
                <Modal.Section>
                    <TextContainer>
                        <p>
                            You've added 5 nominations! You can go back and change your selections.
            </p>
                    </TextContainer>
                </Modal.Section>
            </Modal>
        </div>;
    }

}
