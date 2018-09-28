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

const generateTableHeader = () => (
    <tr>
        <th>House id</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Size</th>
    </tr>
);

const TableBody = (props) => {
    const { houses } = props;
    return (
        <div className={styles.tableWrapper}>
            <div className={styles.tableScroll}>
                <table>
                    <thead>
                        {
                            generateTableHeader()
                        }
                    </thead>
                    <tbody>
                        {
                            houses.map(entry => generateTableRow(entry))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

TableBody.propTypes = {
    houses: PropTypes.arrayOf(customPropTypes.house).isRequired
};

export default TableBody;
