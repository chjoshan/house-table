export const parseHouses = (serverResponse) => {
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

export const parseVendors = (serverResponse) => {
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
