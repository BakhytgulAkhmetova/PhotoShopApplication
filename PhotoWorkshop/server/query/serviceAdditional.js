const sql = require('mssql/msnodesqlv8')

async function getServiceAdditionalList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetServiceAdditionalList');
    return result.recordset;
}

async function getServiceAdditionalById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetServiceAdditionalById');
    return result.recordset;
}

module.exports = { 
    getServiceAdditionalList,
    getServiceAdditionalById
 };