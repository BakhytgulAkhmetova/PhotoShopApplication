const sql = require('mssql/msnodesqlv8')

async function getHeadByLoginPassword(sqlConfig, login, password) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const result = await pool.request()
    .input('LOGIN', sql.NVarChar, login)
    .input('PASSWORD', sql.NVarChar, password).execute('GetHeadByLoginPassword');
    const head = result.recordset.length ? result.recordset[0] : null;
    return head;
}

module.exports = { 
    getHeadByLoginPassword
};
