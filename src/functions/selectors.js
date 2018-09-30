import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';

export const selectHousesByVendor = (vendorId, houses) => _filter(houses, { vendorId });

export const selectVendorById = (vendorId, vendors) => vendors[vendorId];

export const selectHousesWithSorting = (houses, sortBy, sortOrder) => _orderBy(houses, sortBy, sortOrder);
