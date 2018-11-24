const sql = require('mssql/msnodesqlv8')

async function getCustomerList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetCustomerList');
    return result.recordset;
}

async function deleteCustomer(pool) {
    return await pool.request().execute('DeleteCustomer');
}

module.exports = { 
    getCustomerList
 };