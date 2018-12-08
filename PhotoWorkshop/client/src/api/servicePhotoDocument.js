export const getServicesPhotoDocumentFetch = () => {
    return fetch('http://localhost:4000/servicesPhotoDocument')
        .then(data => data.json());
};
