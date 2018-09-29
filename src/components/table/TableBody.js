import * as customPropTypes from 'customPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/tableBody.scss';

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
    const { houses, onSortChange } = props;
    return (
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr onClick={({ target }) => { onSortChange(target.dataset.value); }}>
                        <th data-value="id">House id</th>
                        <th data-value="image">Image</th>
                        <th data-value="name">Name</th>
                        <th data-value="price">Price</th>
                        <th data-value="size">Size</th>
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
    onSortChange: PropTypes.func.isRequired
};

export default TableBody;
