import React from 'react';
import { Heading, TextStyle, Card, ResourceItem, ResourceList, Button } from '@shopify/polaris';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (item) => {
        this.props.addNomination(item)
    }

    render() {
        return (
            <div className="resultsTab">
                <Heading className="sectionLabel" element="h1">Search Results</Heading>

                <Card>

                    <ResourceList
                        resourceName={{ singular: 'customer', plural: 'customers' }}
                        items={this.props.results}
                        renderItem={(item) => {
                            const { Title, Year, imdbID } = item;

                            return (
                                <div id="searchResult">
                                    <Button disabled={this.props.shouldDisableAddButton(item)} onClick={() => this.handleClick(item)} className="deleteNomination">Add Nomination</Button>
                                    <ResourceItem
                                        id={imdbID}
                                        url={"https://www.imdb.com/title/"+imdbID}
                                    >
                                        <h3>
                                            <TextStyle variation="strong">{Title + "(" + Year + ")"}</TextStyle>
                                        </h3>
                                    </ResourceItem>
                                </div>
                            );
                        }}
                    />
                </Card>
            </div>
        );
    }
}
