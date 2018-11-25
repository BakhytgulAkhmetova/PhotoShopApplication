const sql = require('mssql/msnodesqlv8')

async function getMaterialList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetMaterialList');
    return result.recordset;
}

async function getMaterialById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetMaterialById');
    return result.recordset;
}

module.exports = { 
    getMaterialList,
    getMaterialById
 };