const sql = require('mssql/msnodesqlv8')

async function getServicePhotoShootList (sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetServicePhotoShootList');
    return result.recordset;
}

async function getServicePhotoShootById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetServicePhotoShootById');
    return result.recordset;
}

module.exports = { 
    getServicePhotoShootList,
    getServicePhotoShootById
 };
 