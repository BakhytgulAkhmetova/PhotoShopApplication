const sql = require('mssql/msnodesqlv8')
const bcrypt = require('bcrypt');

async function getCustomerList(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetCustomerList');
    return result.recordset;
}

async function getLastCustomer(sqlConfig) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().execute('GetLastCustomer');
    return result.recordset;
}

async function getCustomerByLoginPassword(sqlConfig, login, password) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request().input('LOGIN', sql.NVarChar, login).execute('GetCustomerByLogin');
    let answer;
    if(result.recordset.length) {
        const customerCheck = result.recordset[0];
        const exist = await bcrypt.compare(password, customerCheck.Password)
        answer = exist ? customerCheck: null;
    }
    return answer;
}

async function getCustomerById(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result =  await pool.request().input('ID', sql.Int, id).execute('GetCustomerById');
    return result.recordset;
}

module.exports = { 
    getCustomerList,
    getCustomerById,
    getCustomerByLoginPassword,
    getLastCustomer
 };
