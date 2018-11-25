const sql = require('mssql/msnodesqlv8')

async function getFormatList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetFormatList');
    return result.recordset;
}

async function getFormatById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetFormatById');
    return result.recordset;
}

module.exports = { 
    getFormatList,
    getFormatById
 };