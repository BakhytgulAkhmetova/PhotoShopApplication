const sql = require('mssql/msnodesqlv8')

async function addCustomer(sqlConfig, customer) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { firstName, lastName, phone, address, login, password } = customer;
    return await pool.request()
    .input('FIRSTNAME', sql.NVarChar(50), firstName)
    .input('LASTNAME', sql.NVarChar(50), lastName)
    .input('PHONE', sql.NVarChar(10), phone)
    .input('ADDRESS', sql.NVarChar(255), address)
    .input('LOGIN', sql.NVarChar(50), login)
    .input('PASSWORD', sql.Char(60), password)
    .execute('AddCustomer');
}

async function updateCustomer(sqlConfig, id, customerUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { firstName, lastName, phone, address, login, password } = customerUpdated
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('FIRSTNAME', sql.NVarChar(50), firstName)
    .input('LASTNAME', sql.NVarChar(50), lastName)
    .input('PHONE', sql.NVarChar(10), phone)
    .input('ADDRESS', sql.NVarChar(255), address)
    .input('LOGIN', sql.NVarChar(50), login)
    .input('PASSWORD', sql.Char(60), password)
    .execute('UpdateCustomer');
}

async function deleteCustomer(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteCustomer');
}

module.exports = { 
    addCustomer,
    updateCustomer,
    deleteCustomer
 };