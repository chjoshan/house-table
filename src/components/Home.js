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
