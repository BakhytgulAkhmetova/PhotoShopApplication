const sql = require('mssql/msnodesqlv8')

async function addMaterial(sqlConfig, material) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, price } = material;
    return await pool.request()
    .input('NAME', sql.NVarChar(50), name)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('AddMaterial');
}

async function updateMaterial(sqlConfig, id, materialUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, price } = materialUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('NAME', sql.NVarChar(50), name)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('UpdateMaterial');
}

async function deleteMaterial(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteMaterial');
}

module.exports = { 
    addMaterial,
    updateMaterial,
    deleteMaterial
 };