import React, {setState} from 'react';
import {TextField, Button} from '@shopify/polaris';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick = () => {
        this.props.setResults(this.state.value);
    }

    render() {
        return (
            <div id="search">
                <TextField value={this.state.value} placeholder={'Search'} id="searchBar" onChange={e => {this.setState({value : e})}} clearButton/>
                <Button id="submitSearch" onClick={this.handleClick}>Search</Button>
            </div>
        ); 
    }

  
}