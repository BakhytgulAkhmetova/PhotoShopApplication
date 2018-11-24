const express = require('express');

const app = express();
const sqlConfig = { 
    database: 'PhotoWorkshop',
    server: 'WIN-7PHHH9RHG7P\\SQLEXPRESS',
    options: {
      trustedConnection: true
    }
}
require('./routes/customer')(app, sqlConfig);
// require('./routes/error')(app, sqlConfig);
app.listen(3000);

