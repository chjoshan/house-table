import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/tile.scss';

const Tile = ({ children }) => <div className={styles.tile}>{children}</div>;

Tile.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Tile;
