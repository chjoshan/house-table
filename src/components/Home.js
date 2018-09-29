import { parseHouses, parseVendors } from 'functions/utils';
import React, { Component } from 'react';
import Body from 'components/Body';
import houses from 'houses.json';
import SortControlPanel from 'components/SortControlPanel';
import TableTile from 'components/TableTile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: parseHouses(houses.results),
            vendors: parseVendors(houses.results),
            sortBy: 'id',
            sortOrder: 'asc'
        };
        this.handleGlobalSortChange = this.handleGlobalSortChange.bind(this);
    }

    handleGlobalSortChange(newSortBy) {
        const { sortBy, sortOrder } = this.state;
        let newSortOrder = sortOrder;
        if (sortBy === newSortBy) {
            newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        }
        this.setState(state => Object.assign({}, state, {
            sortBy: newSortBy,
            sortOrder: newSortOrder
        }));
    }

    render() {
        const { sortBy, sortOrder } = this.state;

        return (
            <Body>
                <p>FH.de Vendor Management</p>
                <SortControlPanel
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onGlobalSortChange={this.handleGlobalSortChange}
                />
                <TableTile {...this.state} key={`table-${sortOrder}-${sortBy}`} />
            </Body>
        );
    }
}

export default Home;
