import * as customPropTypes from 'customPropTypes';
import ButtonWithIcon from 'components/ButtonWithIcon';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/sortControlPanel.scss';

const SortControlPanel = (props) => {
    const { onGlobalSortChange, sortBy, sortOrder } = props;

    return (
        <div className={styles.sortControlPanel}>
            <span>sort all by</span>
            <ButtonWithIcon
              label="Name"
              icon={sortBy === 'name' ? sortOrder : 'default'}
              onClick={() => { onGlobalSortChange('name'); }}
            />
            <ButtonWithIcon
              label="Price"
              icon={sortBy === 'price' ? sortOrder : 'default'}
              onClick={() => { onGlobalSortChange('price'); }}
            />
            <ButtonWithIcon
              label="Size"
              icon={sortBy === 'size' ? sortOrder : 'default'}
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
