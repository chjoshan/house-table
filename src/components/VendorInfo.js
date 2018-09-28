import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/tableHeader.scss';

const VendorInfo = ({ vendorLogo, vendorName }) => (
    <div className={styles.tableHeader}>
        <img className={styles.vendorImage} src={vendorLogo} alt="Vendor Logo" />
        <div>{vendorName}</div>
    </div>
);

VendorInfo.propTypes = {
    vendorLogo: PropTypes.string.isRequired,
    vendorName: PropTypes.string.isRequired
};

export default VendorInfo;
