async function getErrorList(pool) {
    return await pool.request().execute('GetErrorLogList');
}

module.exports = { getErrorList };