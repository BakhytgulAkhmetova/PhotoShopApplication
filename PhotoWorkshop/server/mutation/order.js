const sql = require('mssql/msnodesqlv8')

async function addOrder(sqlConfig, order) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { customerId, managerId, timeRequest, timeReady, tarif, status, price } = order;
    return await pool.request()
    .input('CUSTOMER_ID', sql.Int, customerId)
    .input('MANAGER_ID', sql.Int, managerId)
    .input('TIME_REQUEST', sql.DateTime, timeRequest)
    .input('TIME_READY', sql.DateTime, timeReady)
    .input('TARIF', sql.NVarChar(30), tarif)
    .input('STATUS', sql.NVarChar(30), status)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('AddOrder');
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

async function deleteOrder(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteOrder');
}

module.exports = { 
    addOrder,
    updateOrder,
    deleteOrder
 };