import React from 'react';
import { Avatar, TextStyle, Heading, Card, ResourceItem, ResourceList, Button } from '@shopify/polaris';

export default class App extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (item) => {
        this.props.removeNomination(item)
    }

    render() {
        return (
            <div className="resultsTab">
                <Heading className="sectionLabel" element="h1">Nominations</Heading>

                <Card>
                    <ResourceList
                        resourceName={{ singular: 'customer', plural: 'customers' }}
                        items={this.props.nominations}
                        renderItem={(item) => {
                            const { Title, Year, imbdID } = item;

                            return (
                                <div id="searchResult">
                                    <Button className="deleteNomination" onClick={() => this.handleClick(item)}>Remove Nomination</Button>
                                    <ResourceItem
                                        id={imbdID}
                                        url={"https://www.imdb.com/title/" + imbdID}
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
