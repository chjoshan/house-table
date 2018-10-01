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

/*
This is the presentational Table component
Table cell renderers can be found under /table/tableCellRenderers
Ideally every type of data should have a dedicated cell renderer which handles all the edge cases of that type
*/

const TableBody = (props) => {
    const { houses, onSortChange, sortBy, sortOrder } = props;
    return (
        <div className={styles.tableWrapper}>
            {
                houses.length < 1
                && <div className={styles.empty}>There are no houses from this vendor</div>
            }
            {
                houses.length >= 1
                && (
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
                                    <td><PriceCell price={house.price} houseId={house.id} /></td>
                                    <td><NumberCell number={house.size} suffix="sqm" /></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                )
            }
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
