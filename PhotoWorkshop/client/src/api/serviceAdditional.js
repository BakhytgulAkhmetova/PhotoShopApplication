export const getServicesAdditionalFetch = () => {
    return fetch('http://localhost:4000/servicesAdditional')
        .then(data => data.json());
};
