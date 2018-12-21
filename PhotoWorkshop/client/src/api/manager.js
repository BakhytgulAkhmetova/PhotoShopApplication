export const getManagerByLoginPasswordFetch = (login, password) => {
    return fetch(`http://localhost:4000/manager/${login}/${password}`)
        .then(response => response.json())
        .catch(() => null);
};
