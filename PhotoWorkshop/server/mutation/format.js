const sql = require('mssql/msnodesqlv8')

async function addFormat(sqlConfig, format) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, width, height } = format
    return await pool.request()
    .input('NAME', sql.NVarChar(50), name)
    .input('WIDTH', sql.Float, width)
    .input('HEIGHT', sql.Float, height)
    .execute('AddFormat');
}

async function updateFormat(sqlConfig, id, formatUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { name, width, height } = format
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('NAME', sql.NVarChar(50), name)
    .input('WIDTH', sql.Float, width)
    .input('HEIGHT', sql.Float, height)
    .execute('UpdateFormat');
}

async function deleteFormat(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeleteFormat');
}

module.exports = { 
    addFormat,
    updateFormat,
    deleteFormat
 };