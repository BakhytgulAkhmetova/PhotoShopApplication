const sql = require('mssql/msnodesqlv8')

async function getPhotoDocumentList (sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetPhotoDocumentList');
    return result.recordset;
}

async function getServicePhotoDocumentById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetServicePhotoDocumentById');
    return result.recordset;
}

module.exports = { 
    getPhotoDocumentList,
    getServicePhotoDocumentById
 };