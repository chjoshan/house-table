import { parseHouses, parseVendors } from 'functions/parsers';
import React, { Component } from 'react';
import _filter from 'lodash/filter';
import Body from 'components/Body';
import Button from 'components/Button';
import ErrorComponent from 'components/ErrorComponent';
import { fetchData } from 'functions/async';
import GlobalContext from 'context/GlobalContext';
import LoadingComponent from 'components/LoadingComponent';
import SortControlPanel from 'components/SortControlPanel';
import styles from 'styles/root.scss';
import VendorTable from 'components/VendorTable';

// please run the node server which provides the data
const HOUSES_ENDPOINT = 'http://localhost:1337/houses';

class Root extends Component {
    // normalise state by separating houses and vendors entity
    // a house is referenced to its vendor by vendor id
    constructor(props) {
        super(props);
        this.state = {
            houses: {},
            vendors: {},
            sortBy: 'id',
            sortOrder: 'asc',
            update: [],
            loading: true,
            error: false
        };
        this.handleGlobalSortChange = this.handleGlobalSortChange.bind(this);
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this);
    }

    // load the component then trigger data load and then update the state of the app upon data arrival
    componentDidMount() {
        fetchData(HOUSES_ENDPOINT)
            .then(({ response, applicationOrServerError }) => {
                if (response) {
                    const houses = parseHouses(response.results);
                    const vendors = parseVendors(response.results);
                    this.setState(state => ({
                        ...state,
                        ...{
                            loading: false,
                            error: false,
                            houses,
                            vendors,
                            sortBy: 'id',
                            sortOrder: 'asc'
                        }
                    }));
                } else if (applicationOrServerError) {
                    this.setState(state => ({
                        ...state,
                        ...{
                            loading: false,
                            error: applicationOrServerError
                        }
                    }));
                } else {
                    this.setState(state => ({
                        ...state,
                        ...{
                            loading: false,
                            error: {
                                type: 'Unknown Error',
                                message: 'Unknown Error. Please try again in a moment',
                                error: {}
                            }
                        }
                    }));
                }
            });
    }

    // handle global sort change as changed by the sorting control panel
    handleGlobalSortChange(newSortBy) {
        const { sortBy, sortOrder } = this.state;
        let newSortOrder = sortOrder;
        if (sortBy === newSortBy) {
            newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        }
        this.setState(state => ({
            ...state,
            ...{
                sortBy: newSortBy,
                sortOrder: newSortOrder
            }
        }));
    }

    // handle price update when price are changed from the table
    handlePriceUpdate(updatedData) {
        const { update } = this.state;
        const filteredUpdates = _filter(update, ({ id }) => id !== updatedData.id);
        this.setState(state => ({
            ...state,
            ...{ update: [...filteredUpdates, updatedData]
            }
        }));
    }

    // the state of the app is provided via <GlobalContext.Provider>
    render() {
        const { loading, error, sortBy, sortOrder, vendors, houses, update } = this.state;

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
                        <GlobalContext.Provider
                          value={{
                              houses,
                              vendors,
                              sortBy,
                              sortOrder,
                              onPriceUpdate: this.handlePriceUpdate
                          }}
                        >
                            <SortControlPanel
                              sortBy={sortBy}
                              sortOrder={sortOrder}
                              onGlobalSortChange={this.handleGlobalSortChange}
                            />
                            {
                                vendors.allIds.map(vendorId => <VendorTable key={`vendor-${vendorId}`} vendorId={vendorId} />)
                            }
                            <div className={styles.footer}>
                                <Button label="Save" color="blue" onClick={() => { console.log(JSON.stringify({ update })); }} />
                            </div>
                        </GlobalContext.Provider>
                    )
                }
            </Body>
        );
    }
}

export default Root;
