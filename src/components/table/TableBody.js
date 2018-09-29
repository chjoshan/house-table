import * as customPropTypes from 'customPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/table/tableBody.scss';
import TableHeaderCell from 'components/table/tableCellRenderers/TableHeaderCell';

const generateTableRow = house => (
    <tr key={`house-${house.id}`}>
        <td>{house.id}</td>
        <td><img className={styles.houseImg} src={house.img} alt="house" /></td>
        <td>{house.name}</td>
        <td>{house.price}</td>
        <td>{house.size}</td>
    </tr>
);

const TableBody = (props) => {
    const { houses, onSortChange, sortBy, sortOrder } = props;
    return (
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell name="House ID" dataValue="id" onClick={onSortChange} sortBy={sortBy} sortOrder={sortOrder} />
                        <TableHeaderCell name="Image" />
                        <TableHeaderCell name="Name" dataValue="name" onClick={onSortChange} sortBy={sortBy} sortOrder={sortOrder} />
                        <TableHeaderCell name="Price" dataValue="price" onClick={onSortChange} sortBy={sortBy} sortOrder={sortOrder} />
                        <TableHeaderCell name="Size" dataValue="size" onClick={onSortChange} sortBy={sortBy} sortOrder={sortOrder} />
                    </tr>
                </thead>
                <tbody>
                    {
                        houses.map(entry => generateTableRow(entry))
                    }
                </tbody>
            </table>
        </div>
    );
};

TableBody.propTypes = {
    houses: PropTypes.arrayOf(customPropTypes.house).isRequired,
    onSortChange: PropTypes.func.isRequired,
    sortBy: customPropTypes.sortBy.isRequired,
    sortOrder: customPropTypes.sortOrder.isRequired
};

export default TableBody;
