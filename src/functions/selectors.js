import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';

export const selectHousesByVendor = (houses, vendorId) => _filter(houses.byId, { vendorId });

export const selectHouses = (houses, sortBy, sortOrder) => _orderBy(houses, sortBy, sortOrder);
