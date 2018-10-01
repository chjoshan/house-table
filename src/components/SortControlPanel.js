import * as customPropTypes from 'customPropTypes';
import Button from 'components/Button';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/sortControlPanel.scss';

/*
I would assume this to be a server side sort operation in a real app situation.
Because imagining the scenario where pagination/limit is set.
Then we would be sorting only on the first [limit] numbers of data
*/
const SortControlPanel = (props) => {
    const { onGlobalSortChange, sortBy, sortOrder } = props;

    return (
        <div className={styles.sortControlPanel}>
            <span>sort all by</span>
            <Button
              label="Name"
              icon={sortBy === 'name' ? sortOrder : 'sort'}
              onClick={() => { onGlobalSortChange('name'); }}
            />
            <Button
              label="Price"
              icon={sortBy === 'price' ? sortOrder : 'sort'}
              onClick={() => { onGlobalSortChange('price'); }}
            />
            <Button
              label="Size"
              icon={sortBy === 'size' ? sortOrder : 'sort'}
              onClick={() => { onGlobalSortChange('size'); }}
            />
        </div>
    );
};

SortControlPanel.propTypes = {
    onGlobalSortChange: PropTypes.func.isRequired,
    sortOrder: customPropTypes.sortOrder.isRequired,
    sortBy: customPropTypes.sortBy.isRequired
};

export default SortControlPanel;
