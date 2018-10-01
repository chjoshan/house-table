/*
The motivation behind selectors comes from the library reselct from the redux ecosystem.
When a component requires data or derived data from a state then selectors shapes and returns the data to the component.
Advanced implementations of selectors also allow caching and memoizaton of data.
Anyways here is the most basic version which is just selecting the data as required by some component
*/

import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';

export const selectHousesByVendor = (vendorId, houses) => _filter(houses, { vendorId });

export const selectVendorById = (vendorId, vendors) => vendors[vendorId];

export const selectHousesWithSorting = (houses, sortBy, sortOrder) => _orderBy(houses, sortBy, sortOrder);
