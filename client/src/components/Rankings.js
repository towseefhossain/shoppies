import React from 'react';
import { TextStyle, Heading, Card, ResourceItem, ResourceList, Button } from '@shopify/polaris';

export default class App extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div className="leaderboard">
                <Heading className="leaderboardLabel" element="h1">Rankings</Heading>

                <Card>
                    <ResourceList
                        resourceName={{ singular: 'customer', plural: 'customers' }}
                        items={this.props.leaderboard}
                        renderItem={(item, index) => {
                            const { Title, Year, imbdID } = item.movie;
                            const { frequency } = item;
                            const rank = parseInt(index) + 1

                            return (
                                <div id="searchResult">
                                    <Button className="deleteNomination" disabled>{rank}</Button>
                                    <ResourceItem
                                        id={imbdID}
                                        url={"https://www.imdb.com/title/" + imbdID}
                                    >
                                        <h3>
                                            <TextStyle variation="strong">{Title + "(" + Year + ")"}</TextStyle>
                                        </h3>
                                        <h3>
                                            <TextStyle variation="strong">{" Votes : " + frequency + ""}</TextStyle>
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