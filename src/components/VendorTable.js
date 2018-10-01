import {
    selectHousesByVendor,
    selectHousesWithSorting,
    selectVendorById
} from 'functions/selectors';
import * as customPropTypes from 'customPropTypes';
import GlobalContext from 'context/GlobalContext';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/vendorTable.scss';
import TableBody from 'components/table/TableBody';
import VendorInfo from 'components/table/VendorInfo';

class VendorTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: selectHousesWithSorting(props.houses, props.sortBy, props.sortOrder),
            vendor: props.vendor,
            sortBy: props.sortBy,
            sortOrder: props.sortOrder
        };
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { houses, sortBy, sortOrder } = this.props;
        const newSortBy = nextProps.sortBy;
        const newSortOrder = nextProps.sortOrder;
        if (sortBy !== newSortBy || sortOrder !== newSortOrder) {
            const sortedHouses = selectHousesWithSorting(houses, newSortBy, newSortOrder);
            this.setState(state => ({
                ...state,
                ...{
                    sortBy: newSortBy,
                    sortOrder: newSortOrder,
                    houses: sortedHouses
                }
            }));
        }
    }

    handleSortChange(newSortBy) {
        const { houses, sortBy, sortOrder } = this.state;
        let newSortOrder = sortOrder;
        if (sortBy === newSortBy) {
            newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        }
        const sortedHouses = selectHousesWithSorting(houses, newSortBy, newSortOrder);
        this.setState(state => ({
            ...state,
            ...{
                houses: sortedHouses,
                sortBy: newSortBy,
                sortOrder: newSortOrder
            }
        }));
    }

    render() {
        const { vendor, houses, sortBy, sortOrder } = this.state;

        return (
            <React.Fragment>
                <hr className={styles.spacer} />
                <VendorInfo vendorLogo={vendor.logo} vendorName={vendor.displayName} />
                <TableBody
                  houses={houses}
                  onSortChange={this.handleSortChange}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <hr className={styles.spacer} />
            </React.Fragment>
        );
    }
}

VendorTable.propTypes = {
    vendor: customPropTypes.vendor.isRequired,
    sortBy: customPropTypes.sortBy.isRequired,
    sortOrder: customPropTypes.sortOrder.isRequired,
    houses: PropTypes.arrayOf(customPropTypes.house).isRequired
};

export default props => (
    <GlobalContext.Consumer>
        {state => (
            <VendorTable
              {...props}
              houses={selectHousesByVendor(props.vendorId, state.houses.byId)}
              vendor={selectVendorById(props.vendorId, state.vendors.byId)}
              sortBy={state.sortBy}
              sortOrder={state.sortOrder}
            />
        )}
    </GlobalContext.Consumer>
);
