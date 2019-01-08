export const getHeadByLoginPasswordFetch = (login, password) => {
    return fetch(`http://localhost:4000/head/${login}/${password}`)
        .then(response => response.json())
        .catch(() => null);
};
