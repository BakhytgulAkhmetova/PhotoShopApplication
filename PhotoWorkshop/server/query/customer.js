const sql = require('mssql/msnodesqlv8')

async function getCustomerList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetCustomerList');
    return result.recordset;
}

async function getCustomerById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetCustomerById');
    return result.recordset;
}

module.exports = { 
    getCustomerList,
    getCustomerById
 };
