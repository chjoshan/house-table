import * as customPropTypes from 'customPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/table/tableCellRenderers/tableHeaderCell.scss';

const TableHeaderCell = (props) => {
    const { name, dataValue, sortBy, sortOrder, onClick } = props;
    const active = dataValue === sortBy;
    let sortIcon = '=';
    if (active && sortOrder === 'asc') {
        sortIcon = 'ʌ';
    }
    if (active && sortOrder === 'desc') {
        sortIcon = 'v';
    }

    return (
        <th onClick={() => onClick(dataValue)}>
            <div className={styles.tableHeaderCell}>
                <span>{name}</span>
                {
                    sortBy
                    && <span className={styles.sortIcon}>{sortIcon}</span>
                }
            </div>
        </th>
    );
};

TableHeaderCell.propTypes = {
    name: PropTypes.string.isRequired,
    dataValue: PropTypes.string,
    sortBy: customPropTypes.sortBy,
    sortOrder: customPropTypes.sortOrder,
    onClick: PropTypes.func
};

TableHeaderCell.defaultProps = {
    sortBy: 'id',
    sortOrder: 'asc',
    dataValue: '',
    onClick: () => {}
};

export default TableHeaderCell;
