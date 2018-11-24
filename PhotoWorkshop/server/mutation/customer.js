const sql = require('mssql/msnodesqlv8')

async function addCustomer(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('FIRSTNAME', sql.NVarChar(50), 'Valery')
    .input('LASTNAME', sql.NVarChar(50), 'Miladze')
    .input('PHONE', sql.NVarChar(10), '90909090')
    .input('ADDRESS', sql.NVarChar(255), 'Flat num5')
    .input('LOGIN', sql.NVarChar(255), 'abc')
    .input('PASSWORD', sql.Char(60), 'sfsdffs')
    .execute('AddCustomer');
}


async function updateCustomer(pool) {
    return await pool.request().execute('UpdateCustomer');
}

module.exports = { 
    addCustomer,
    updateCustomer
 };