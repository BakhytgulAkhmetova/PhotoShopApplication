export const getMaterialListFetch = () => {
    return fetch('http://localhost:4000/materials')
        .then(data => data.json());
};
