const sql = require('mssql/msnodesqlv8')

async function getOrderList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetOrderList');
    return result.recordset;
}

async function getOrderListByCustomerId(sqlConfig, customerId) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().input('ID', sql.Int, customerId).execute('GetOrderListByCustomerId');
    return result.recordset;
}

async function getOrderlById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetOrderById');
    return result.recordset;
}

module.exports = { 
    getOrderList,
    getOrderListByCustomerId,
    getOrderlById
 };