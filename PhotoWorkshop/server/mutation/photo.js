const sql = require('mssql/msnodesqlv8')

async function addPhoto(sqlConfig, photo) {
    console.log(photo);
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { data, customerId, type, name } = photo;
    return await pool.request()
    .input('DATA', sql.VarBinary(sql.MAX), data)
    .input('CUSTOMER_ID', sql.Int, customerId)
    .input('TYPE', sql.NVarChar(50), type)
    .input('NAME', sql.NVarChar, name)
    .execute('AddPhoto');
}

async function updatePhoto(sqlConfig, id, photoUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { data, customerId } = photoUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('DATA', sql.VarBinary(sql.MAX), data)
    .input('CUSTOMER_ID', sql.Int, customerId)
    .execute('UpdatePhoto');
}

async function deletePhoto(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeletePhoto');
}

module.exports = { 
    addPhoto,
    updatePhoto,
    deletePhoto
 };