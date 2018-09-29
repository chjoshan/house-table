import React, { Component } from 'react';
import * as customPropTypes from 'customPropTypes';
import PropTypes from 'prop-types';
import { selectHouses } from 'functions/selectors';
import TableBody from 'components/table/TableBody';

class TableBodyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: selectHouses(props.houses, props.sortBy, props.sortOrder),
            sortBy: props.sortBy,
            sortOrder: props.sortOrder
        };
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(newSortBy) {
        const { houses, sortBy, sortOrder } = this.state;
        let newSortOrder = sortOrder;
        if (sortBy === newSortBy) {
            newSortOrder = this.toggleSortOrder();
        }
        const sortedHouses = selectHouses(houses, newSortBy, newSortOrder);
        this.setState(state => Object.assign({}, state, {
            houses: sortedHouses,
            sortBy: newSortBy,
            sortOrder: newSortOrder
        }));
    }

    toggleSortOrder() {
        const { sortOrder } = this.state;
        return sortOrder === 'asc' ? 'desc' : 'asc';
    }

    render() {
        const { houses } = this.state;
        return (
            <TableBody houses={houses} onSortChange={this.handleSortChange} />
        );
    }
}

TableBodyContainer.propTypes = {
    houses: PropTypes.arrayOf(customPropTypes.house).isRequired,
    sortBy: customPropTypes.sortBy.isRequired,
    sortOrder: customPropTypes.sortOrder.isRequired
};

export default TableBodyContainer;
