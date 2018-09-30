import * as customPropTypes from 'customPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/table/tableCellRenderers/tableHeaderCell.scss';

const unSortableColumns = ['image'];

const TableHeaderCell = (props) => {
    const { name, value, onClick, sortBy, sortOrder } = props;

    let displayIcon = '=';
    if (value === sortBy) {
        if (sortOrder === 'asc') {
            displayIcon = 'ʌ';
        }
        if (sortOrder === 'desc') {
            displayIcon = 'v';
        }
    }

    const unsortableColumn = unSortableColumns.includes(value);
    const onClickHandler = unsortableColumn ? () => {} : onClick;

    return (
        <th onClick={onClickHandler}>
            <div className={styles.tableHeaderCell}>
                <span>{name}</span>
                {
                    !unSortableColumns.includes(value)
                    && <span className={styles.sortIcon}>{displayIcon}</span>
                }
            </div>
        </th>
    );
};

TableHeaderCell.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    sortBy: customPropTypes.sortBy.isRequired,
    sortOrder: customPropTypes.sortOrder.isRequired
};

export default TableHeaderCell;
