import React from 'react';
import { TextContainer, Modal } from '@shopify/polaris';
import API from '../utils/API'
import { withRouter } from 'react-router-dom';

class Alert extends React.Component {
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
        API.saveMovies(this.props.nominations)
            .then(() => {
                console.log("POST SUCCESS");
            })
            .catch(err => console.log(err));
        this.setState({
            open: false
        })
        this.props.history.push('/leaderboards')
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return <div style={{ height: '500px' }}>
            <Modal onClose={this.handleClose} title="Nomination Selections Complete" secondaryActions={{
                content: 'Submit',
                onAction: this.handleChange
            }}
                primaryAction={{
                    content: 'Edit Nominations',
                    onAction: this.handleClose
                }}
                open={this.state.open}>
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

export default withRouter(Alert)