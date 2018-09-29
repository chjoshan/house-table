import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/table/tableCellRenderers/tableHeaderCell.scss';

const TableHeaderCell = (props) => {
    const { name, icon, onClick } = props;

    let displayIcon = '=';
    if (icon === 'asc') {
        displayIcon = 'ʌ';
    }
    if (icon === 'desc') {
        displayIcon = 'v';
    }

    return (
        <th onClick={onClick}>
            <div className={styles.tableHeaderCell}>
                <span>{name}</span>
                {
                    icon
                    && <span className={styles.sortIcon}>{displayIcon}</span>
                }
            </div>
        </th>
    );
};

TableHeaderCell.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

TableHeaderCell.defaultProps = {
    onClick: () => {},
    icon: ''
};

export default TableHeaderCell;
