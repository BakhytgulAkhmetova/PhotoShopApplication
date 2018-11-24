const { getCustomerList } = require('../query/customer');
const { addCustomer } = require('../mutation/customer');

const customerRoutes = (app, sqlConfig) => {
    app.get('/customer/list', async function (req, res) {
        res.send(await getCustomerList(sqlConfig));
    });
    app.post('/customer', async function (req, res) {
    res.send(await addCustomer(sqlConfig));
})
}

module.exports = customerRoutes;