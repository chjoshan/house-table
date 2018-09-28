import { parseHouses, parseVendors } from 'functions/utils';
import React, { Component } from 'react';
import houses from 'houses.json';
import TableTile from 'components/TableTile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: parseHouses(houses.results),
            vendors: parseVendors(houses.results),
            sortBy: 'id',
            sortOrder: 'ASC'
        };
    }

    render() {
        return (
            <TableTile {...this.state} />
        );
    }
}

export default Home;

// TODO: implement async loading of data
// TODO: comment about global state and state management, normalization
// TODO: comment about the usage of style
// TODO: comment about the usage Fragments and Context
