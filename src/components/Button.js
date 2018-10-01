import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/button.scss';

const Button = (props) => {
    const { label, icon, color, onClick } = props;

    let displayIcon;
    if (icon === 'sort') {
        displayIcon = '=';
    }
    if (icon === 'asc') {
        displayIcon = 'ʌ';
    }
    if (icon === 'desc') {
        displayIcon = 'v';
    }

    return (
        <button className={classnames(styles.button, styles[`button-${color}`])} type="button" onClick={onClick}>
            <span>{label}</span>
            {
                icon
                && <span className={styles.icon}>{displayIcon}</span>
            }
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    icon: '',
    color: 'grey'
};

export default Button;
