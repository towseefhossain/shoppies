import React from 'react';
import { withRouter } from 'react-router-dom'
import { TextField, Button } from '@shopify/polaris';
import API from '../utils/API'

class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick = () => {
        API.saveMovies(this.props.nominations)
            .catch(err => console.log(err));
        this.props.history.push('/leaderboards')
    }

    render() {
        return (
            <div>
                <Button
                    id="submitSearch"
                    onClick={this.handleClick}
                    disabled={!(this.props.nominations.length > 0)}>Submit Nominations</Button>
            </div>
        );
    }
}

export default withRouter(Submit)