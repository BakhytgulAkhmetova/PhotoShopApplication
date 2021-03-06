export const getCustomerOrderListFetch = (customerId) => {
    return fetch(`http://localhost:4000/orderList/${ customerId}`)
        .then(response => response.json());
};

export const getAllOrderListFetch = () => {
    return fetch('http://localhost:4000/orders')
        .then(response => response.json());
};

export const getOrderListByDateRangeFetch = (start, end) => {
    return fetch(`http://localhost:4000/orderList/${ start }/${ end }`)
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

export const updateOrderStatusFetch = (updateOptions, id) => {
    return fetch(`http://localhost:4000/order/update/status/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        body: JSON.stringify(updateOptions) })
        .then(response => response.json());
};

export const deleteOrderFetch = (id) => {
    return fetch(`http://localhost:4000/order/delete/${id}`, {
        method: 'GET'
    }).then(response => response.json());
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
