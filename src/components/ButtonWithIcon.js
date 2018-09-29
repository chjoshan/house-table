import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/buttonWithIcon.scss';

const ButtonWithIcon = (props) => {
    const { label, icon, onClick } = props;

    let displayIcon = '=';
    if (icon === 'asc') {
        displayIcon = 'ʌ';
    }
    if (icon === 'desc') {
        displayIcon = 'v';
    }

    return (
        <button className={styles.buttonWithIcon} type="button" onClick={onClick}>
            <span>{label}</span>
            <span className={styles.icon}>{displayIcon}</span>
        </button>
    );
};

ButtonWithIcon.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ButtonWithIcon;
