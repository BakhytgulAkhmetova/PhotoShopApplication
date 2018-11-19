const express = require('express');
const sql = require('mssql/msnodesqlv8')

// const { getErrorList } = require('../server/queries/error');
const app = express();
const pool = new sql.ConnectionPool({ 
    database: 'PhotoWorkshop',
    server: 'WIN-7PHHH9RHG7P\\SQLEXPRESS',
    options: {
      trustedConnection: true
    }
})
pool.connect(err => err === null? err: console.log(err));

app.get('/', async function (req, res) {
    const result = await pool.request()
    .execute('GetErrorLogList')

    res.send(result);
})

app.listen(3000);

module.exports = { app, pool };
