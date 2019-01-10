const sql = require('mssql/msnodesqlv8')

async function addOrder(sqlConfig, order) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { customerId, managerId, timeRequest, tarif, status, price } = order;
    return await pool.request()
    .input('CUSTOMER_ID', sql.Int, customerId)
    .input('MANAGER_ID', sql.Int, managerId)
    .input('TIME_REQUEST', sql.DateTime, timeRequest)
    .input('TARIF', sql.NVarChar(30), tarif)
    .input('STATUS', sql.NVarChar(30), status)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('AddOrder');
}

async function addOrderDetails(sqlConfig, details) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { orderId, detailId, detailName } = details;
    return await pool.request()
    .input('DETAIL_ID', sql.Int, detailId)
    .input('ORDER_ID', sql.Int, orderId)
    .input('DETAIL_NAME', sql.DateTime, detailName)
    .execute('AddOrderDetails');
}

async function updateOrder(sqlConfig, id, orderUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { customerId, managerId, timeRequest, timeReady, tarif, status, price } = orderUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('CUSTOMER_ID', sql.Int, customerId)
    .input('MANAGER_ID', sql.Int, managerId)
    .input('TIME_REQUEST', sql.DateTime, timeRequest)
    .input('TIME_READY', sql.DateTime, timeReady)
    .input('TARIF', sql.NVarChar(30), tarif)
    .input('STATUS', sql.NVarChar(30), status)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('UpdateOrder');
}

async function updateOrderStatus(sqlConfig, id, orderUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { timeReady, status } = orderUpdated;

    return await pool.request()
    .input('ID', sql.Int, id)
    .input('TIME_READY', sql.DateTime, timeReady)
    .input('STATUS', sql.NVarChar(30), status)
    .execute('UpdateOrderStatus');
}

async function deleteOrder(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteOrder');
}

module.exports = { 
    addOrder,
    addOrderDetails,
    updateOrder,
    deleteOrder,
    updateOrderStatus
 };