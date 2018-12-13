export const addCustomerFetch = (customer) => {
    return fetch('http://localhost:4000/customer/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        body: JSON.stringify(customer) })
        .then(response => response.json());
};

export const getLastCustomerFetch = () => {
    return fetch('http://localhost:4000/customer/last')
        .then(response => response.json());
};
