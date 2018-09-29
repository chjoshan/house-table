import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/body.scss';

const Body = ({ children }) => <div className={styles.body}>{children}</div>;

Body.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Body;
