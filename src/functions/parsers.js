// this file contains parser utility functions like parser for house object, parser for vendor object, number formatter, etc.

// extract houses object from server response
export const parseHouses = (serverResponse) => {
    // houses object in the global object will have this shape
    const result = {
        allIds: [],
        byId: {}
    };

    serverResponse.forEach((data) => {
        const id = data.internal_id;
        if (!result.allIds.includes(id)) {
            const house = {
                id,
                img: data.exterior_images[0]['fill-320x240'],
                name: data.name,
                price: data.price,
                size: data.living_area_total,
                vendorId: data.vendor_verbose.id
            };
            result.allIds.push(id);
            result.byId[id] = house;
        }
    });

    return result;
};

// extract vendor object from server response
export const parseVendors = (serverResponse) => {
    // vendors object in the global object will have this shape
    const result = {
        allIds: [],
        byId: {}
    };

    serverResponse.forEach((data) => {
        const { vendor_verbose } = data;
        const { id, display_name, logo } = vendor_verbose;
        if (!result.allIds.includes(id)) {
            const vendor = {
                id,
                displayName: display_name,
                logo: logo['max-140x50'] || logo.original
            };
            result.allIds.push(id);
            result.byId[id] = vendor;
        }
    });

    return result;
};

// format number by locale, currency, etc.
export const formatNumber = (number, locale = 'de-DE', currency = null) => {
    const config = {};
    if (currency) {
        config.style = 'currency';
        config.currency = currency;
    }
    return new Intl.NumberFormat(locale, config).format(number);
};
