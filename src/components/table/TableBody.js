import * as customPropTypes from 'customPropTypes';
import NumberCell from 'components/table/tableCellRenderers/NumberCell';
import PriceCell from 'components/table/tableCellRenderers/PriceCell';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/table/tableBody.scss';
import TableHeaderCell from 'components/table/tableCellRenderers/TableHeaderCell';

const TABLE_HEADER = [
    {
        name: 'House ID',
        value: 'id'
    },
    {
        name: 'Image',
        value: 'image'
    },
    {
        name: 'Name',
        value: 'name'
    },
    {
        name: 'Price',
        value: 'price'
    },
    {
        name: 'Size',
        value: 'size'
    }
];

const TableBody = (props) => {
    const { houses, onSortChange, sortBy, sortOrder } = props;
    return (
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr>
                        {
                            TABLE_HEADER.map(header => (
                                <TableHeaderCell
                                  key={`tableHeaderCell-${header.value}`}
                                  name={header.name}
                                  value={header.value}
                                  onClick={() => onSortChange(header.value)}
                                  sortBy={sortBy}
                                  sortOrder={sortOrder}
                                />
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        houses.map(house => (
                            <tr key={`house-${house.id}`}>
                                <td>{house.id}</td>
                                <td><img className={styles.houseImg} src={house.img} alt="house" /></td>
                                <td>{house.name}</td>
                                <td><PriceCell price={house.price} /></td>
                                <td><NumberCell number={house.size} suffix="sqm" /></td>
                            </tr>
                        ))
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
