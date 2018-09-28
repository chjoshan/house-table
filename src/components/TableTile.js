import * as customPropTypes from 'customPropTypes';
import React from 'react';
import { selectHousesByVendor } from 'functions/selectors';
import styles from 'styles/tableTile.scss';
import TableBody from 'components/TableBody';
import Tile from 'components/Tile';
import VendorInfo from 'components/VendorInfo';

const TableTile = ({ houses, vendors }) => (
    <Tile>
        {
            vendors.allIds.map((vendorId) => {
                const vendor = vendors.byId[vendorId];
                const housesByVendor = selectHousesByVendor(houses, vendorId);
                return (
                    <React.Fragment key={`vendor-${vendorId}`}>
                        <hr className={styles.spacer} />
                        <VendorInfo
                          vendorLogo={vendor.logo}
                          vendorName={vendor.displayName}
                        />
                        <div className={styles.tableBodyWrapper}>
                            <TableBody houses={housesByVendor} />
                        </div>
                    </React.Fragment>
               );
            })
        }
    </Tile>
);

TableTile.propTypes = {
    houses: customPropTypes.houses.isRequired,
    vendors: customPropTypes.vendors.isRequired
};

export default TableTile;

// TODO: comment about selectors
