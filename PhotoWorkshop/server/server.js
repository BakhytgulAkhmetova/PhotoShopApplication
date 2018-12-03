const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const sqlConfig = { 
    database: 'PhotoWorkshop',
    server: 'WIN-7PHHH9RHG7P\\SQLEXPRESS',
    options: {
      trustedConnection: true
    }
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
require('./routes/customer')(app, sqlConfig);
require('./routes/format')(app, sqlConfig);
require('./routes/manager')(app, sqlConfig);
require('./routes/material')(app, sqlConfig);
require('./routes/order')(app, sqlConfig);
require('./routes/photo')(app, sqlConfig);
require('./routes/serviceAdditional')(app, sqlConfig);
require('./routes/servicePhotoDocument')(app, sqlConfig);
require('./routes/servicePhotoShoot')(app, sqlConfig);
app.listen(4000);

