export const getCustomerOrderListFetch = (customerId) => {
    return fetch(`http://localhost:4000/orderList/${ customerId}`)
        .then(response => response.json());
};
