const sql = require('mssql/msnodesqlv8')

async function addServicePhotoDocument(sqlConfig, servicePhDoc) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { documentType, count, formatId } = servicePhDoc;
    return await pool.request()
    .input('DOCUMENT_TYPE', sql.NVarChar(50), documentType)
    .input('COUNT', sql.Int, count)
    .input('FORMAT_ID', sql.Int, formatId)
    .execute('AddServicePhotoDocument');
}

async function updateServicePhotoDocument(sqlConfig, id, servicePhDocUpdated) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    const { documentType, count, formatId } = servicePhDocUpdated;
    return await pool.request()
    .input('ID', sql.Int, id)
    .input('DOCUMENT_TYPE', sql.NVarChar(50), documentType)
    .input('COUNT', sql.Int, count)
    .input('FORMAT_ID', sql.Int, formatId)
    .execute('UpdatePhotoDocument');
}

async function deleteServicePhotoDocument(sqlConfig, id) {
    const pool = await new sql.ConnectionPool(sqlConfig).connect();
    return await pool.request()
    .input('ID', sql.Int, id)
    .execute('DeletePhotoDocument');
}

module.exports = { 
    addServicePhotoDocument,
    updateServicePhotoDocument,
    deleteServicePhotoDocument
 };