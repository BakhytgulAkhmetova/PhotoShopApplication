const sql = require('mssql/msnodesqlv8')

async function addServicePhotoShoot(sqlConfig, servicePhShoot) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, duration, countRetouch, countColorCorrect, price } = servicePhShoot;
    return await pool.request()
    .input('NAME', sql.NVarChar(50), name)
    .input('DURATION', sql.Float, duration)
    .input('COUNT_RETOUCH', sql.Int, countRetouch)
    .input('COUNT_COLOR_CORRECT', sql.Int, countColorCorrect)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('AddServicePhotoShoot');
}

async function updateServicePhotoShoot(sqlConfig, id, servicePhShootUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, duration, countRetouch, countColorCorrect, price } = servicePhShootUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('NAME', sql.NVarChar(50), name)
    .input('DURATION', sql.Float, duration)
    .input('COUNT_RETOUCH', sql.Int, countRetouch)
    .input('COUNT_COLOR_CORRECT', sql.Int, countColorCorrect)
    .input('PRICE', sql.Decimal(18, 2), price)
    .execute('UpdateServicePhotoShoot');
}

async function deleteServicePhotoShoot(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteServicePhotoShoot');
}

module.exports = { 
    addServicePhotoShoot,
    updateServicePhotoShoot,
    deleteServicePhotoShoot
 };