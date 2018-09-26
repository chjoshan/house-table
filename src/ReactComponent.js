import PropTypes from 'prop-types';
import React from 'react';

const ReactComponent = ({ title }) => <div>{title}</div>;

ReactComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default ReactComponent;
