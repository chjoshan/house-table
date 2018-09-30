import { fetch } from 'whatwg-fetch';

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (response.status === 200) {
            const data = await response.json();
            return { response: data };
        }

        // ...check other statuses, error cases
        return {
            applicationOrServerError: {
                type: 'ServerError',
                message: 'Server responded with an error. Please try again in a moment',
                error: response
            }
        };

        // ...catch other unforeseen fatal cases
    } catch (err) {
        return {
            applicationOrServerError: {
                type: 'DataLoadingError',
                message: 'Data loading failed for some reason. Please try again in a moment',
                error: err
            }
        };
    }
};
