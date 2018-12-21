export const addPhotoFetch = (photo) => {
    return fetch('http://localhost:4000/photo/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        body: JSON.stringify(photo) })
        .then(response => response.json());
};
