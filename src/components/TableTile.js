import * as customPropTypes from 'customPropTypes';
import React from 'react';
import { selectHousesByVendor } from 'functions/selectors';
import styles from 'styles/tableTile.scss';
import TableBodyContainer from 'components/table/TableBodyContainer';
import Tile from 'components/Tile';
import VendorInfo from 'components/table/VendorInfo';

const TableTile = ({ houses, vendors, sortBy, sortOrder }) => (
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
                            <TableBodyContainer
                              houses={housesByVendor}
                              sortBy={sortBy}
                              sortOrder={sortOrder}
                            />
                        </div>
                    </React.Fragment>
               );
            })
        }
    </Tile>
);

TableTile.propTypes = {
    houses: customPropTypes.houses.isRequired,
    vendors: customPropTypes.vendors.isRequired,
    sortBy: customPropTypes.sortBy.isRequired,
    sortOrder: customPropTypes.sortOrder.isRequired
};

export default TableTile;
