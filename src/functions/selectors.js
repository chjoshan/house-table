import _filter from 'lodash/filter';

export const selectHousesByVendor = (houses, vendorId) => _filter(houses.byId, { vendorId });
