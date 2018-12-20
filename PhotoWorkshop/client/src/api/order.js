export const getCustomerOrderListFetch = (customerId) => {
    return fetch(`http://localhost:4000/orderList/${ customerId}`)
        .then(response => response.json());
};

export const addOrderFetch = (order) => {
    return fetch('http://localhost:4000/order/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        body: JSON.stringify(order) })
        .then(response => response.json());
};

export const addOrderDetailsFetch = (details) => {
    return fetch('http://localhost:4000/order/details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        body: JSON.stringify(details) })
        .then(response => response.json());
};

export const getOrderLastFetch = (customerId) => {
    return fetch('http://localhost:4000/order/last')
        .then(response => response.json());
};
