export const getServicePhotoShootListFetch = () => {
    return fetch('http://localhost:4000/servicesPhotoShoot')
        .then(data => data.json());
};
