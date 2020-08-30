import React from 'react';
import { Avatar, TextStyle, Heading, Card, ResourceItem, ResourceList, Button } from '@shopify/polaris';

export default class App extends React.Component {
    render() {
        return (
            <div className="resultsTab">
                <Heading className="sectionLabel" element="h1">Nominations</Heading>

                <Card>
                    <ResourceList
                        className="resourceList"
                        resourceName={{ singular: 'customer', plural: 'customers' }}
                        items={[
                            {
                                id: 341,
                                url: 'customers/341',
                                name: 'Mae Jemison',
                                location: 'Decatur, USA',
                            },
                            {
                                id: 256,
                                url: 'customers/256',
                                name: 'Ellen Ochoa',
                                location: 'Los Angeles, USA',
                            },
                        ]}
                        renderItem={(item) => {
                            const { id, url, name, location } = item;
                            const media = <Avatar customer size="medium" name={name} />;
                

                            return (
                                <div id="searchResult">
                                    <Button className="deleteNomination">Delete</Button>
                                    <ResourceItem
                                        id={id}
                                        url={url}
                                        accessibilityLabel={`View details for ${name}`}
                                    >
                                        <h3>
                                            <TextStyle variation="strong">{name}</TextStyle>
                                        </h3>
                                        <div>{location}</div>
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
