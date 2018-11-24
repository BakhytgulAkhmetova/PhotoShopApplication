const sql = require('mssql/msnodesqlv8')

async function addManager(sqlConfig, manager) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { firstName, lastName, login, password } = manager;
    return await pool.request()
    .input('FIRSTNAME', sql.NVarChar(50), firstName)
    .input('LASTNAME', sql.NVarChar(50), lastName)
    .input('LOGIN', sql.NVarChar(50), login)
    .input('PASSWORD', sql.Char(60), password)
    .execute('AddManager');
}

async function updateManager(sqlConfig, id, managerUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { firstName, lastName, login, password } = managerUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('FIRSTNAME', sql.NVarChar(50), firstName)
    .input('LASTNAME', sql.NVarChar(50), lastName)
    .input('LOGIN', sql.NVarChar(50), login)
    .input('PASSWORD', sql.Char(60), password)
    .execute('UpdateManager');
}

async function deleteManager(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteManager');
}

module.exports = { 
    addManager,
    updateManager,
    deleteManager
 };