import PropTypes from 'prop-types';

export const house = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    vendorId: PropTypes.number.isRequired
});

export const houses = PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    byId: PropTypes.objectOf(house).isRequired
});

export const vendor = PropTypes.shape({
    id: PropTypes.number.isRequired,
    displayName: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
});

export const vendors = PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    byId: PropTypes.objectOf(vendor).isRequired
});
