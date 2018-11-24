const sql = require('mssql/msnodesqlv8')

async function addServiceAdditional(sqlConfig, serviceAdditional) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, price } = serviceAdditional;
    return await pool.request()
    .input('NAME', sql.NVarChar(100), name)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('AddServiceAdditional');
}

async function updateServiceAdditional(sqlConfig, id, serviceAdditionalUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, price } = serviceAdditionalUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('NAME', sql.NVarChar(100), name)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('UpdateServiceAdditional');
}

async function deleteServiceAdditional(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteServiceAdditional');
}

module.exports = { 
    addServiceAdditional,
    updateServiceAdditional,
    deleteServiceAdditional
 };