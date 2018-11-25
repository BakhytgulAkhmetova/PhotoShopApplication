const sql = require('mssql/msnodesqlv8')

async function getPhotoList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetPhotoList');
    return result.recordset;
}

async function getPhotosByCustomerId(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetPhotosByCustomerId');
    return result.recordset;
}

module.exports = { 
    getPhotoList,
    getPhotosByCustomerId
 };