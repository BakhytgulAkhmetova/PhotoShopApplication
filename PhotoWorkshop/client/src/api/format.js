export const getFormatsFetch = () => {
    return fetch('http://localhost:4000/formats')
        .then(data => data.json());
};
