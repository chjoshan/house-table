import { formatNumber } from 'functions/parsers';
import PropTypes from 'prop-types';
import React from 'react';

const AreaCell = ({ number, suffix }) => <div>{`${formatNumber(number)} ${suffix}`.trim()}</div>;

AreaCell.propTypes = {
    number: PropTypes.number.isRequired,
    suffix: PropTypes.string
};

AreaCell.defaultProps = {
    suffix: ''
};

export default AreaCell;
