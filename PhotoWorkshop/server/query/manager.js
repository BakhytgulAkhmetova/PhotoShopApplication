const sql = require('mssql/msnodesqlv8')

async function getaManagerList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetManagerList');
    return result.recordset;
}

async function getManagerById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetManagerById');
    return result.recordset;
}

module.exports = { 
    getaManagerList,
    getManagerById
 };