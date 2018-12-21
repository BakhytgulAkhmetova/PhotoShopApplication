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

async function getManagerByLoginPassword(sqlConfig, login, password) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request()
    .input('LOGIN', sql.NVarChar, login)
    .input('PASSWORD', sql.NVarChar, password).execute('GetManagerByLoginPassword');
    const manager = result.recordset.length ? result.recordset[0] : null;
    return manager;
}

module.exports = { 
    getaManagerList,
    getManagerByLoginPassword,
    getManagerById
 };