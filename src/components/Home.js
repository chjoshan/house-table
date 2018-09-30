import { parseHouses, parseVendors } from 'functions/utils';
import React, { Component } from 'react';
import Body from 'components/Body';
import ErrorComponent from 'components/ErrorComponent';
import { fetchData } from 'functions/async';
import LoadingComponent from 'components/LoadingComponent';
import SortControlPanel from 'components/SortControlPanel';
import TableTile from 'components/TableTile';

const HOUSES_ENDPOINT = 'http://localhost:1337/houses';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: {},
            vendors: {},
            sortBy: 'id',
            sortOrder: 'asc',
            loading: true,
            error: false
        };
        this.handleGlobalSortChange = this.handleGlobalSortChange.bind(this);
    }

    componentDidMount() {
        fetchData(HOUSES_ENDPOINT)
            .then(({ response, applicationOrServerError }) => {
                if (response) {
                    const houses = parseHouses(response.results);
                    const vendors = parseVendors(response.results);
                    this.setState(state => Object.assign({}, state, {
                        loading: false,
                        error: false,
                        houses,
                        vendors,
                        sortBy: 'id',
                        sortOrder: 'asc'
                    }));
                } else if (applicationOrServerError) {
                    this.setState(state => Object.assign({}, state, {
                        loading: false,
                        error: applicationOrServerError,
                        data: null
                    }));
                } else {
                    this.setState(state => Object.assign({}, state, {
                        loading: false,
                        error: false,
                        data: null
                    }));
                }
            });
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
        const { loading, error, sortBy, sortOrder } = this.state;

        return (
            <Body>
                <p>FH.de Vendor Management</p>
                {
                    loading
                    && <LoadingComponent />
                }
                {
                    error
                    && <ErrorComponent />
                }
                {
                    !loading && !error
                    && (
                        <React.Fragment>
                            <SortControlPanel
                              sortBy={sortBy}
                              sortOrder={sortOrder}
                              onGlobalSortChange={this.handleGlobalSortChange}
                            />
                            <TableTile {...this.state} key={`table-${sortOrder}-${sortBy}`} />
                        </React.Fragment>
                    )
                }
            </Body>
        );
    }
}

export default Home;
